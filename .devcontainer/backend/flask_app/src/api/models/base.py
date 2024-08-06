from flask_login import current_user
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask import jsonify
g_db = SQLAlchemy()
g_migrate = Migrate()
# relationship(관계 맺는 모델 이름, back_populates=연결 필드 이름)
# Cascade = 1:N 관계에서 1쪽에 설정
# all = 모두
# save-update = session에 변경 add 시, 연결된 모든 객체도 session에 add
# delete = 삭제될 때만
# delete-orphan = delete + 관계가 끊길 때도 추가 삭제
# lazy='selectin': 주 객체를 가져오는 쿼리에 관련된 모든 객체를 가져오는 서브쿼리를 사용하여 즉시 로드
# lazy='dynamic': 지연로딩 설정 가능 = 쿼리 객체 반환 -> 사용시 해당 쿼리 객체를 실행함
# 실제 사용할 때는 lazy='dynamic'설정 후 sqlalchemy.orm.selectinload, joinload 메소드 사용 = N+1 문제 해결

from datetime import datetime, timedelta, timezone
def get_korea_time():
    return datetime.now(timezone(timedelta(hours=9)))

class BaseModel(g_db.Model):
    __abstract__ = True                                                            
    id = g_db.Column(g_db.Integer, primary_key=True)                                   
    date_created = g_db.Column(g_db.DateTime, default=get_korea_time())

    @classmethod
    def unique_check(cls, **kwargs):
        return g_db.session.query(cls).filter_by(**kwargs).first()
    
    @classmethod
    def get_instance(cls, id):
        return g_db.session.get(cls, id)
    
    @classmethod
    def get_instances_list(cls, **kwargs):
        query = g_db.session.query(cls)
        for key, value in kwargs.items():
            query = query.filter_by(**{key: value})
        return query.all()
        
    @classmethod
    def get_all(cls):
        return g_db.session.query(cls).all()

    def add_instance(self):
        g_db.session.add(self)
        g_db.session.commit()
        return self

    def to_json(self):
        return jsonify(self)

    def __repr__(self):
        return f'{self.__class__.__name__}: {self.id} '
    
    def __str__(self):
        return f'{self.__class__.__name__}: {self.id} '

# ------------------------------------------ Admin ------------------------------------------
from flask_admin.contrib.sqla import ModelView
    
class AdminBase(ModelView):
    column_formatters = {
        'date_created': lambda view, context, model, name: model.date_created.strftime('%Y-%m-%d %H:%M:%S')
    }

    # 2. 폼에서 제외할 열 설정
    form_excluded_columns = ('date_created',)
    
    # def is_accessible(self):
    #     if current_user and current_user.is_authenticated == True and current_user.admin_check == True:
    #         return True
    #     else:
    #         return print('permission error')