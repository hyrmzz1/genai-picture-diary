from flask.json import jsonify
from src.api.models.base import AdminBase, BaseModel, g_db

class DiaryComment(BaseModel):
    __tablename__ = 'diary_comment'
    comment_id = g_db.Column(g_db.Integer, primary_key=True)
    entry_id = g_db.Column(g_db.Integer, g_db.ForeignKey('diary_entry.entry_id'), nullable=False)
    user_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user.id'), nullable=False)
    comment_text = g_db.Column(g_db.Text, nullable=False)
    created_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp())
    updated_at = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())
    
    diary_entry = g_db.relationship('DiaryEntry', back_populates='diary_comment')  

    def __init__(self, entry_id, user_id, comment_text):
        self.entry_id = entry_id
        self.user_id = user_id
        self.comment_text = comment_text
    
    def to_json(self):
        data = {key: value for key, value in self.__dict__.items()}
        return jsonify(data)
    
    def __repr__(self):
        return f"<DiaryComment {self.comment_id} - Entry {self.entry_id}>"

    def __str__(self):
        return self.comment_text

# ------------------------------------------ Admin ------------------------------------------   
class DiaryCommentAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('comment_id', 'entry_id', 'user_id', 'comment_text', 'created_at', 'updated_at')