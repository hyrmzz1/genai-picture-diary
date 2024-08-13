from flask.json import jsonify
from flask_wtf import FlaskForm
from flask_admin.form import Select2Widget
from wtforms import SelectField, StringField
from wtforms.validators import DataRequired
import enum

from src.api.models.base import AdminBase, BaseModel, g_db

class EntryType(enum.Enum):
    PERSONAL = 'personal'
    GROUP = 'group'

class DiaryEntry(BaseModel):
    __tablename__ = 'diary_entry'

    user_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user.id'), nullable=False)
    group_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user_group.id'), nullable=True)
    title = g_db.Column(g_db.String(255), nullable=True)
    record_date = g_db.Column(g_db.Date, nullable=False)
    text_content = g_db.Column(g_db.Text, nullable=True)
    _entry_type = g_db.Column('entry_type', g_db.Enum(EntryType), nullable=False)
    date_updated = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())
    
    images = g_db.relationship('DiaryImage', back_populates='entry', cascade='delete, delete-orphan', lazy='dynamic')
    tags = g_db.relationship('DiaryTag', back_populates='entry', cascade='delete, delete-orphan', lazy='dynamic')
    comments = g_db.relationship('DiaryComment', back_populates='entry', cascade='delete, delete-orphan', lazy='dynamic')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def to_json(self):
        data = {key: value for key, value in self.__dict__.items()}
        return jsonify(data)
    
    def __repr__(self):
        return f"<DiaryEntry {self.entry_id} - {self.title}>"

    def __str__(self):
        return self.title
    
    @property
    def entry_type(self):
        return self._entry_type.value
    
    @entry_type.setter
    def entry_type(self, value):
        if value not in {'personal', 'group'}:
            raise ValueError("Invalid alert_type. Must be 'personal' or 'group'")
        self._entry_type = EntryType(value)

    # create : base의 add_instance 함수 사용
    # read : base의 get_instance 함수 사용
    # update : update_diary 정의함
    # delete : delete_diary 정의함 
    
    # 일기 업데이트 메서드
    def update_diary(self, data):
        for key, value in data.items():
            if key in self.__table__.columns:
                setattr(self, key, value)
        g_db.session.commit()
        
    # 일기 삭제 메서드
    def delete_diary(self, id):
        diary_entry = g_db.session.query(DiaryEntry).get(id)
        if not diary_entry:
            print('일기를 찾을 수 없음')
        g_db.session.delete(diary_entry)
        g_db.session.commit()
    
class DiaryEntryAdmin(AdminBase):
    # 1. 표시 할 열 설정
    #column_list = ('entry_id', 'user_id', 'group_id', 'title', 'record_date', 'entry_type', 'created_at', 'updated_at')
    column_list = ('id', 'user_id', 'group_id', 'title', 'record_date', '_entry_type', 'date_created', 'date_updated')
    form_columns = ['user_id', 'group_id', 'title', 'record_date', 'text_content']
    column_searchable_list = ['title', 'text_content']
    column_filters = ['record_date', 'date_created', 'date_updated']
    form_type = {
        'user_id': StringField('사용자 ID', validators=[DataRequired()]),
        'group_id': StringField('그룹 ID'),
        'title': StringField('제목', validators=[DataRequired()]),
        'record_date': StringField('일기 날짜', validators=[DataRequired()]),
        'text_content': StringField('내용'),
        'entry_type':SelectField('일기 구분', choices=[('personal', '개인'), ('group', '그룹')], validators=[DataRequired()], widget=Select2Widget())
    }
    
    form = type('ExtendedSignUpForm', (FlaskForm,), form_type)

    def create_model(self, form):
        form_data = {name: field.data for name, field in form._fields.items()}
        model = DiaryEntry(**form_data)
        g_db.session.add(model)
        g_db.session.commit()
        return model

    def edit_form(self, obj=None):
        form = super().edit_form(obj)
        return form