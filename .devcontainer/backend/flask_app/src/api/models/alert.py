from flask import jsonify
from flask_wtf import FlaskForm
import enum
from flask_admin.form import Select2Widget
from wtforms import SelectField, IntegerField, TextAreaField
from wtforms.validators import DataRequired

from src.api.models.user import User
from src.api.models.user_group import UserGroup
from src.api.models.base import AdminBase, BaseModel, g_db

class AlertType(enum.Enum):
    GROUP = 'group'
    SINGLE = 'single'

class Alert(BaseModel):
    __tablename__ = 'alert'
    # 그룹 메세지의 경우 해당 그룹 ID, 개인 메세지의 경우 0
    # 그룹 메세지의 경우 0, 개인 메세지의 경우 해당 유저 ID
    _alert_type = g_db.Column('alert_type', g_db.Enum(AlertType), nullable=False) 
    group_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user_group.id', name='fk_alert_user_group', ondelete='CASCADE'))
    user_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user.id', name='fk_alert_user', ondelete='CASCADE'))
    message = g_db.Column(g_db.Text, nullable=False)  # 알림 본문

    user = g_db.relationship('User', back_populates="user_alerts")
    group = g_db.relationship('UserGroup', back_populates="group_alerts")

    def __init__(self, alert_type, **kwargs):
        super().__init__(**kwargs)
        try:
            if alert_type == 'group':
                self._alert_type = AlertType.GROUP
            elif alert_type == 'single':
                self._alert_type = AlertType.SINGLE
            else:
                raise ValueError("Invalid alert_type. Must be 'group' or 'single'.")
            print('생성 완료')
        except Exception as e:
            print(f"Error saving alert: {e}")
        return self
    
    def is_group(self):
        return self._alert_type == AlertType.GROUP
    
    def is_single(self):
        return self._alert_type == AlertType.SINGLE

    @property
    def alert_type(self):
        return self._alert_type.value
    
    @alert_type.setter
    def alert_type(self, value):
        if value not in {'group', 'single'}:
            raise ValueError("Invalid alert_type. Must be 'group' or 'single'.")
        self._alert_type = AlertType(value)
    
    def send_alert(self):
        g_db.session.add(self)
        g_db.session.commit()

    def to_json(self):
        exclude_fields = {}
        data = {key: value for key, value in self.__dict__.items() if key not in exclude_fields}
        return jsonify(data)

    def __repr__(self):
        return super().__repr__() + f'group_id : {self.group_id}, user_id : {self.user_id}\nmessage : {self.message}'

    def __str__(self):
        return super().__str__() + f'group_id : {self.group_id}, user_id : {self.user_id}\nmessage : {self.message}'

from sqlalchemy.event import listens_for
@listens_for(g_db.session, 'before_flush')
def before_flush(session, flush_context, instances):
    for obj in session.dirty or session.new:
        if isinstance(obj, Alert):
            # Update group_id and user_id based on alert_type
            if obj._alert_type == AlertType.GROUP:
                obj.user_id = None
            elif obj._alert_type == AlertType.SINGLE:
                obj.group_id = None
            else:
                obj.group_id = None
                obj.user_id = None


class AlertAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('id', 'alert_type', 'group.group_name', 'user.nickname', 'message')

    # 2. 열 이름 설정
    column_labels = {
        'id': 'ID',
        'alert_type': 'Alert Type',
        'group.group_name': 'Group Name',
        'user.nickname': 'User Nickname',
        'message': 'Message'
    }

    def common_form_setup(self, form, obj=None):
        form.user_id.choices = [(user.id, f"{user.id}: {user.nickname}") for user in User.get_all()]
        form.group_id.choices = [(user_group.id, f"{user_group.id}: {user_group.group_name}") for user_group in UserGroup.get_all()]

    def create_form(self, obj=None):
        form = super().create_form(obj)
        self.common_form_setup(form)
        return form

    def edit_form(self, obj=None):
        form = super().edit_form(obj)
        self.common_form_setup(form, obj)
        return form
    
    form_type = {
        'alert_type':SelectField('Alert Type', choices=[('group', 'GROUP'), ('single', 'SINGLE')], validators=[DataRequired()], widget=Select2Widget()),
        'group_id': SelectField('Group ID', choices=[]),
        'user_id': SelectField('User ID', choices=[]),
        'message': TextAreaField('Message', validators=[DataRequired()])
    }
    
    form = type('create_form', (FlaskForm,), form_type)

    def create_model(self, form):
        # Create an instance of the model
        model = Alert(
            alert_type=form.alert_type.data,
            group_id=form.group_id.data,
            user_id=form.user_id.data,
            message=form.message.data
        )
        model.add_instance()
        return model