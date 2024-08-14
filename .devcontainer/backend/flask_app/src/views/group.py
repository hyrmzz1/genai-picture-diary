from flask import Blueprint, jsonify
from src.api.models.user_group import UserGroup
from src.api.models.diary_entry import DiaryEntry

# Blueprint 생성
group_view = Blueprint('group_view', __name__, url_prefix='/group')

# 사용자의 학급 목록 조회
@group_view.route('/<string:user_id>', methods=['GET'])
def get_user_groups(user_id):
    # DiaryEntry에서 user_id로 필터링하여 일기 항목을 찾기
    diaries = DiaryEntry.query.filter_by(user_id=user_id).all()
    
    if not diaries:
        return jsonify({'message': 'No diaries found for this user'}), 404

    # 일기 항목에서 group_id 수집
    group_ids = {diary.group_id for diary in diaries if diary.group_id is not None}

    if not group_ids:
        return jsonify({'message': 'No groups associated with this user'}), 404

    # UserGroup에서 group_id로 필터링하여 그룹 정보 가져오기
    groups = UserGroup.query.filter(UserGroup.id.in_(group_ids)).all()

    if not groups:
        return jsonify({'message': 'No groups found for the collected group_ids'}), 404

    # 그룹 정보를 JSON으로 변환
    group_list = [group.to_json() for group in groups]
    
    return jsonify(group_list), 200
