from flask.json import jsonify
from src.api.models.base import AdminBase, BaseModel, g_db

class DiaryTag(BaseModel):
    __tablename__ = 'diary_tag'
    entry_id = g_db.Column(g_db.Integer, g_db.ForeignKey('diary_entry.id'), nullable=False)
    tag_name = g_db.Column(g_db.String(50), nullable=False)
    date_updated = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())
    
    entry = g_db.relationship('DiaryEntry', back_populates='tags')  

    def __init__(self, entry_id, tag_name):
        self.entry_id = entry_id
        self.tag_name = tag_name

    def to_json(self):
        return {
            'id': self.id,
            'tag_name': self.tag_name
        }
    
    def __repr__(self):
        return f"<DiaryTag {self.tag_id} - {self.tag_name}>"

    def __str__(self):
        return self.tag_name
        
    # create : base의 add_instance 함수 사용
    # read : base의 get_instance 함수 사용
    
   # 태그 업데이트 메서드
    def update_tag(self, data):
        for key, value in data.items():
            if key in self.__table__.columns:
                setattr(self, key, value)
        g_db.session.commit()

    # 태그 삭제 메서드
    def delete_tag(self, id):
        tag = g_db.session.query(DiaryTag).get(id)
        if not tag:
            print('태그를 찾을 수 없음')
            return
        g_db.session.delete(tag)
        g_db.session.commit()

# ------------------------------------------ Admin ------------------------------------------   
class DiaryTagAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('id', 'entry_id', 'tag_name', 'date_created', 'date_updated')