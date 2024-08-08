from flask.json import jsonify
from src.api.models.base import AdminBase, BaseModel, g_db

class DiaryTag(BaseModel):
    __tablename__ = 'diary_tag'
    tag_id = g_db.Column(g_db.Integer, primary_key=True)
    entry_id = g_db.Column(g_db.Integer, g_db.ForeignKey('diary_entry.entry_id'), nullable=False)
    tag_name = g_db.Column(g_db.String(50), nullable=False)
    created_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp())
    updated_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())
    
    diary_entry = g_db.relationship('DiaryEntry', back_populates='diary_tag')  

    def __init__(self, entry_id, tag_name):
        self.entry_id = entry_id
        self.tag_name = tag_name

    def to_json(self):
        data = {key: value for key, value in self.__dict__.items()}
        return jsonify(data)
    
    def __repr__(self):
        return f"<DiaryTag {self.tag_id} - {self.tag_name}>"

    def __str__(self):
        return self.tag_name

# ------------------------------------------ Admin ------------------------------------------   
class DiaryTagAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('tag_id', 'entry_id', 'tag_name', 'created_at', 'updated_at')