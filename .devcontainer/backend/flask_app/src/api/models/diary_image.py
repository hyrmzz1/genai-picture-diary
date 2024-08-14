from flask.json import jsonify
from src.api.models.base import AdminBase, BaseModel, g_db

class DiaryImage(BaseModel):
    __tablename__ = 'diary_image'
    entry_id = g_db.Column(g_db.Integer, g_db.ForeignKey('diary_entry.id'), nullable=False)
    image_url = g_db.Column(g_db.Text, nullable=False)
    date_updated = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())
    
    entry = g_db.relationship('DiaryEntry', back_populates='images')  

    def __init__(self, entry_id, image_url):
        self.entry_id = entry_id
        self.image_url = image_url

    def to_json(self):
        return {
            'id': self.id,
            'image_url': self.image_url
        }
    
    def __repr__(self):
        return f"<DiaryImage {self.image_id} - Entry {self.entry_id}>"

    def __str__(self):
        return self.image_url
        
    # create : base의 add_instance 함수 사용
    # read : base의 get_instance 함수 사용
    
    # 이미지 업데이트 메서드
    # 기존 이미지는 삭제하고 새로 생성
    def update_image(self, data):
        for key, value in data.items():
            if key in self.__table__.columns:
                setattr(self, key, value)
        g_db.session.commit()

    # 이미지 삭제 메서드
    def delete_image(self, id):
        image = g_db.session.query(DiaryImage).get(id)
        if not image:
            print('이미지를 찾을 수 없음')
            return
        g_db.session.delete(image)
        g_db.session.commit()

# ------------------------------------------ Admin ------------------------------------------   
class DiaryImageAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('id', 'entry_id', 'image_url', 'date_created', 'date_updated')