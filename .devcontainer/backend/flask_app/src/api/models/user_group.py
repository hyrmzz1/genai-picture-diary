from flask import jsonify
from src.api.models.base import AdminBase, BaseModel, g_db

class UserGroup(BaseModel):
    __tablename__ = 'user_group'
    
    group_name = g_db.Column(g_db.String(50))

    group_alerts = g_db.relationship('Alert', back_populates="group", cascade='delete, delete-orphan', lazy='dynamic') # push 알림

    def to_json(self):
        exclude_fields = {}
        data = {key: value for key, value in self.__dict__.items() if key not in exclude_fields}
        return jsonify(data)

    def __repr__(self):
        return super().__repr__() + f'group_name : {self.group_name}'

    def __str__(self):
        return super().__str__() + f'group_name : {self.group_name}'

class UserGroupAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('id', 'group_name')

    # 2. form 제외 열
    form_excluded_columns = ('group_alerts', 'date_created')