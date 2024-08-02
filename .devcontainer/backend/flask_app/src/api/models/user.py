from flask.json import jsonify
from flask_login import UserMixin
from flask_wtf import FlaskForm
from flask_admin.form import Select2Widget
from wtforms import PasswordField, SelectField, StringField
from wtforms.validators import DataRequired
from werkzeug.security import generate_password_hash, check_password_hash
import enum

from src.api.models.base import AdminBase, BaseModel, g_db

class UserType(enum.Enum):
    STUDENT = 'student'
    TEACHER = 'teacher'
    ADMIN = 'admin'

# flask-login 사용하기 위해 UserMixin 상속
class User(BaseModel, UserMixin):
    __tablename__ = 'user'
    fullname = g_db.Column(g_db.String(50), nullable=False)                    # 이름                                
    nickname = g_db.Column(g_db.String(50), unique=True, nullable=False)       # nickname unique
    login_id = g_db.Column(g_db.String(50), unique=True, nullable=False)       # login id unique
    password = g_db.Column(g_db.String(255), nullable=False)
    _user_type = g_db.Column('user_type', g_db.Enum(UserType), nullable=False)

    user_alerts = g_db.relationship('Alert', back_populates="user", cascade='delete, delete-orphan', lazy='dynamic') # push 알림
    profile_image = g_db.relationship('Image', back_populates='user', cascade='delete, delete-orphan', lazy='dynamic')


    def __init__(self, **kwargs):
        password = kwargs.pop('password', None)
        kwargs.pop('csrf_token', None)
        self.set_password(password)
        super().__init__(**kwargs)
    
    def set_password(self, password):
        self.password = generate_password_hash(password)
    
    @property
    def user_type(self):
        return self._user_type.value
    
    @user_type.setter
    def user_type(self, value):
        if value not in {'student', 'teacher', 'admin'}:
            raise ValueError("Invalid alert_type. Must be 'student' or 'teacher' or 'admin'.")
        self._user_type = UserType(value)

    @classmethod
    def user_check(cls, login_id, password):
        login_id = login_id.strip().replace(' ', '')
        user = g_db.session.query(cls).filter_by(login_id=login_id).first()
        if user:
            if not check_password_hash(password, user.password): return user
            else: return print('비밀번호가 틀렸습니다.')
        else: return print('존재하지 않는 아이디')
    
    def update_user(self, data):
        if 'password' in data or 'login_id' in data:
            return print('유효하지 않은 입력')
        
        for key, value in data.items():
            if key in self.__table__.columns:
                setattr(self, key, value)
        g_db.session.commit()
        
    def to_json(self):
        exclude_fields = {'password'}
        data = {key: value for key, value in self.__dict__.items() if key not in exclude_fields}
        return jsonify(data)

    def __repr__(self):
        return super().__repr__() + f'{self.fullname}' + f'{self.nickname}'

    def __str__(self):
        return super().__str__() + f'{self.fullname}' + f'{self.nickname}'
    
class UserAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('id', '_user_type', 'fullname', 'nickname', 'login_id')

    form_type = {
        'fullname':StringField('Full Name', validators=[DataRequired()]),
        'nickname':StringField('Nickname', validators=[DataRequired()]),
        'login_id':StringField('Login ID', validators=[DataRequired()]),
        'password':PasswordField('Password', validators=[DataRequired()]),
        'user_type':SelectField('User Type', choices=[('student', 'Student'), ('teacher', 'Teacher'), ('admin', 'Admin')], validators=[DataRequired()], widget=Select2Widget())
    }
    
    form = type('ExtendedSignUpForm', (FlaskForm,), form_type)

    def create_model(self, form):
        form_data = {name: field.data for name, field in form._fields.items()}
        print(form_data)
        model = User(**form_data)
        model.add_instance()
        return model
    
    def edit_form(self, obj=None):
        form = super().edit_form(obj)
        del form.password
        return form