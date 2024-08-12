from flask import Blueprint, jsonify
from src.api.models.user_group import UserGroup

# Blueprint 생성
user_view = Blueprint('user_view', __name__, url_prefix='/user')

# 사용자의 학급 목록 조회
@user_view.route('/<int:user_id>/group-lists', methods=['GET'])
def get_user_groups(user_id):
    groups = UserGroup.query.filter_by(user_id=user_id).all()
    if not groups:
        return jsonify({'message': 'No groups found for this user'}), 404

    group_list = [group.to_json() for group in groups]
    
    return jsonify(group_list), 200
