from flask.json import jsonify
from src.api.models.base import AdminBase, BaseModel, g_db

class DiaryImage(BaseModel):
    __tablename__ = 'diary_image'
    image_id = g_db.Column(g_db.Integer, primary_key=True)
    entry_id = g_db.Column(g_db.Integer, g_db.ForeignKey('diary_entry.entry_id'), nullable=False)
    image_url = g_db.Column(g_db.Text, nullable=False)
    created_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp())
    updated_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())
    
    diary_entry = g_db.relationship('DiaryEntry', back_populates='diary_image')  

    def __init__(self, entry_id, image_url):
        self.entry_id = entry_id
        self.image_url = image_url

    def to_json(self):
        data = {key: value for key, value in self.__dict__.items()}
        return jsonify(data)

    def __repr__(self):
        return f"<DiaryImage {self.image_id} - Entry {self.entry_id}>"

    def __str__(self):
        return self.image_url

# ------------------------------------------ Admin ------------------------------------------   
class DiaryImageAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('image_id', 'entry_id', 'image_url', 'created_at', 'updated_at')