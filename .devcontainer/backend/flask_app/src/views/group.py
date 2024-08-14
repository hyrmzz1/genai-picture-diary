from flask import Blueprint, jsonify
from src.api.models.user_group import UserGroup

# Blueprint 생성
group_view = Blueprint('group_view', __name__, url_prefix='/group')

# 사용자의 학급 목록 조회
@group_view.route('/<string:user_id>', methods=['GET'])
def get_user_groups(user_id):
    groups = UserGroup.query.filter_by(user_id=user_id).all()
    if not groups:
        return jsonify({'message': 'No groups found for this user'}), 404

    group_list = [group.to_json() for group in groups]
    
    return jsonify(group_list), 200
