from flask.json import jsonify
from src.api.models.base import AdminBase, BaseModel, g_db

class DiaryComment(BaseModel):
    __tablename__ = 'diary_comment'
    entry_id = g_db.Column(g_db.Integer, g_db.ForeignKey('diary_entry.id'), nullable=False)
    user_id = g_db.Column(g_db.Integer, g_db.ForeignKey('user.id'), nullable=False)
    comment_text = g_db.Column(g_db.Text, nullable=False)
                  
    date_updated = g_db.Column(g_db.DateTime, default=g_db.func.current_timestamp(), onupdate=g_db.func.current_timestamp())
    
    #entry = g_db.relationship('DiaryEntry', back_populates='comments')  

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
    
    # create : base의 add_instance 함수 사용
    # read : base의 get_instance 함수 사용
    
    # 댓글 업데이트 메서드
    def update_comment(self, data):
        for key, value in data.items():
            if key in self.__table__.columns:
                setattr(self, key, value)
        g_db.session.commit()

    # 댓글 삭제 메서드
    def delete_comment(self, id):
        comment = g_db.session.query(DiaryComment).get(id)
        if not comment:
            print('댓글을 찾을 수 없음')
            return
        g_db.session.delete(comment)
        g_db.session.commit()

# ------------------------------------------ Admin ------------------------------------------   
class DiaryCommentAdmin(AdminBase):
    # 1. 표시 할 열 설정
    column_list = ('id', 'entry_id', 'user_id', 'comment_text', 'date_created', 'date_updated')