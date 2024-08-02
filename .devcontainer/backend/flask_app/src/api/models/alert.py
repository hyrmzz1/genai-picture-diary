from flask import jsonify
import enum

from src.api.models.base import AdminBase, BaseModel, g_db

class AlertType(enum.Enum):
    GROUP = 'group'
    SINGLE = 'single'

class Alert(BaseModel):
    __tablename__ = 'alert'
    # 그룹 메세지의 경우 해당 그룹 ID, 개인 메세지의 경우 0
    # 그룹 메세지의 경우 0, 개인 메세지의 경우 해당 유저 ID
    _alert_type = g_db.Column('alert_type', g_db.Enum(AlertType), nullable=False) 
    group_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user_group.id', name='fk_alert_user_group', ondelete='CASCADE'), nullable=False)
    user_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user.id', name='fk_alert_user', ondelete='CASCADE'), nullable=False)
    message = g_db.Column(g_db.Text, nullable=False)  # 알림 본문

    user = g_db.relationship('User', back_populates="user_alerts")
    group = g_db.relationship('UserGroup', back_populates="group_alerts")

    def __init__(self, alert_type, **kwargs):
        try:
            if alert_type == 'group':
                self.alert_type = AlertType.GROUP
                self.user_id = 0
            elif alert_type == 'single':
                self.alert_type = AlertType.SINGLE
                self.group_id = 0
            else:
                raise ValueError("Invalid alert_type. Must be 'group' or 'single'.")
        except Exception as e:
            print(f"Error saving alert: {e}")
        super().__init__(**kwargs)
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