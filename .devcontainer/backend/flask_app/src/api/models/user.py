from flask.json import jsonify
from flask_login import UserMixin
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from werkzeug.security import generate_password_hash, check_password_hash

from src.api.models.base import AdminBase, BaseModel, g_db

# flask-login 사용하기 위해 UserMixin 상속
class User(BaseModel, UserMixin):
    __tablename__ = 'user'
    fullname = g_db.Column(g_db.String(50))                    # 이름                                
    nickname = g_db.Column(g_db.String(50), unique=True)       # nickname unique
    login_id = g_db.Column(g_db.String(50), unique=True)       # login id unique
    password = g_db.Column(g_db.String(255))
    user_type = g_db.Column(g_db.Integer, default=0)           # 0 = student, 1 = teacher, 2 = admin 

    profile_image = g_db.relationship('Image', back_populates='user', cascade='delete, delete-orphan', lazy='dynamic')

    def __init__(self, password, **kwargs):
        self.set_password(password)
        super().__init__(**kwargs)
    
    def set_password(self, password):
        self.password = generate_password_hash(password)
    
    @classmethod
    def user_check(cls, login_id, password):
        login_id = login_id.strip().replace(' ', '')
        user = g_db.session.query(cls).filter_by(login_id=login_id).first()
        if user:
            if not check_password_hash(password, user.password): return user
            else: return print('비밀번호가 틀렸습니다.')
        else: return print('존재하지 않는 아이디')
    
    def update_user(self, data):
        self.fullname = data.get('fullname', self.fullname)
        self.nickname = data.get('nickname', self.nickname)
        self.user_type= data.get('user_type', self.user_type)
    
    def is_student(self):
        if self.user_type == 0: 
            return True
        else: return False

    def is_teacher(self):
        if self.user_type == 1: 
            return True
        else: return False

    def is_admin(self):
        if self.uset_type == 2: 
            return True
        
    def to_json(self):
        exclude_fields = {'password'}
        data = {key: value for key, value in self.__dict__.items() if key not in exclude_fields}
        return jsonify(data)

    def __repr__(self):
        return super().__repr__() + f'{self.username}'         

    def __str__(self):
        return super().__str__() + f'{self.username}' 

class UserAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('id', 'fullname', 'nickname', 'login_id', 'user_type')

    # 2. 폼 데이터 설정
    permisson_check = {
        'fullname': StringField('fullname'),
        'nickname': StringField('nickname'),
        'login_id': StringField('login_id'),
        'user_type': IntegerField('user_type', default=False),
    }
    create_form = type('ExtendedSignUpForm', (FlaskForm,), permisson_check)
    edit_form = type('EditForm', (FlaskForm,), permisson_check)
