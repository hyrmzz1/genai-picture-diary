from flask import Blueprint, jsonify
from src.api.models.user_group import UserGroup
from src.api.models.diary_entry import DiaryEntry

# Blueprint 생성
user_view = Blueprint('user_view', __name__, url_prefix='/user')
