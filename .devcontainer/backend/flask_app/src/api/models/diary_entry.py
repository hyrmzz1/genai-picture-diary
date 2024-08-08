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

    entry_id = g_db.Column(g_db.Integer, primary_key=True)
    user_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user.id'), nullable=False)
    group_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user_group.id'), nullable=True)
    title = g_db.Column(g_db.String(255), nullable=True)
    entry_date = g_db.Column(g_db.Date, nullable=False)
    text_content = g_db.Column(g_db.Text, nullable=True)
    _entry_type = g_db.Column('entry_type', g_db.Enum(EntryType), nullable=False)
    created_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp())
    updated_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())

    diary_image = g_db.relationship('DiaryImage', back_populates='diary_entry', cascade='delete, delete-orphan', lazy='dynamic')
    diary_tag = g_db.relationship('DiaryTag', back_populates='diary_entry', cascade='delete, delete-orphan', lazy='dynamic')
    diary_comment = g_db.relationship('DiaryComment', back_populates='diary_entry', cascade='delete, delete-orphan', lazy='dynamic')

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

    @classmethod        
    def create_diary(self, data):
        try : 
            for key, value in data.items():
                if key in self.__table__.columns:
                    setattr(self, key, value)
            g_db.session.commit()
            return jsonify({'entry_id': self.entry_id}), 201
        except Exception as e:
            return jsonify({'error': str(e)}), 400
   
    def get_diary_entry(self, entry_id):
        diary_entry = g_db.session.query(DiaryEntry).get(entry_id)
        if diary_entry is None:
            return jsonify({'error': '일기를 찾을 수 없음'}), 404
        return jsonify(diary_entry.to_json())

    def update_diary(self, data):
        try : 
            for key, value in data.items():
                if key in self.__table__.columns:
                    setattr(self, key, value)
            g_db.session.commit()
            return jsonify({'entry_id': self.entry_id}), 201
        except Exception as e:
            return jsonify({'error': str(e)}), 400

    def to_json(self):
        data = {key: value for key, value in self.__dict__.items()}
        return jsonify(data)

    def __repr__(self):
        return super().__repr__() + f'{self.user_id}' + f'{self.title}'

    def __str__(self):
        return super().__str__() + f'{self.user_id}' + f'{self.title}'
    
class DiaryEntryAdmin(AdminBase):
    # 1. 표시 할 열 설정
    #column_list = ('entry_id', 'user_id', 'group_id', 'title', 'entry_date', 'entry_type', 'created_at', 'updated_at')
    column_list = ('entry_id', 'user_id', 'group_id', 'title', 'entry_date', '_entry_type', 'created_at', 'updated_at')
    form_columns = ['user_id', 'group_id', 'title', 'entry_date', 'text_content']
    column_searchable_list = ['title', 'text_content']
    column_filters = ['entry_date', 'created_at', 'updated_at']
    form_type = {
        'user_id': StringField('사용자 ID', validators=[DataRequired()]),
        'group_id': StringField('그룹 ID'),
        'title': StringField('제목', validators=[DataRequired()]),
        'entry_date': StringField('일기 날짜', validators=[DataRequired()]),
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