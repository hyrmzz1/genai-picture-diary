from flask import Blueprint, render_template, request, jsonify
from src.api.models.diary_entry import DiaryEntry
from src.api.models.diary_image import DiaryImage
from src.api.models.diary_tag import DiaryTag

# Blueprint 생성
diary_view = Blueprint('diary_view', __name__, url_prefix='/diary')

# 새로운 일기 생성 (DiaryEntry, DiaryImage, DiaryTag)
@diary_view.route('/', methods=['POST'])
def create_diary():
    data = request.get_json()

    # DiaryEntry 필드 추출 및 생성
    diary_fields = ['user_id', 'group_id', 'title', 'entry_date', 'text_content', 'entry_type']
    new_diary = DiaryEntry(**{field: data[field] for field in diary_fields})
    new_diary.add_instance()

    # DiaryImage 생성
    images = data.get('images', [])
    for image_data in images:
        new_image = DiaryImage(entry_id=new_diary.id, **image_data)
        new_image.add_instance()

    # DiaryTag 생성
    tags = data.get('tags', [])
    for tag_data in tags:
        new_tag = DiaryTag(entry_id=new_diary.id, **tag_data)
        new_tag.add_instance()

    return jsonify({'message': f'New diary created with ID {new_diary.id}'}), 201

# 기존 일기 상세 내용 반환 (DiaryEntry, DiaryImage, DiaryTag)
@diary_view.route('/<int:diary_id>', methods=['GET'])
def get_diary(diary_id):
    diary = DiaryEntry.get_instance(diary_id)
    if not diary:
        return jsonify({'message': 'Diary not found'}), 404

    # DiaryImage 및 DiaryTag 조회
    images = DiaryImage.query.filter_by(entry_id=diary_id).all()
    tags = DiaryTag.query.filter_by(entry_id=diary_id).all()

    return jsonify({
        'diary': diary.to_json(),
        'images': [image.to_json() for image in images],
        'tags': [tag.to_json() for tag in tags]
    }), 200

# 기존 일기 수정 (DiaryEntry, DiaryImage, DiaryTag)
@diary_view.route('/<int:diary_id>', methods=['POST'])
def update_diary(diary_id):
    diary = DiaryEntry.get_instance(diary_id)
    if not diary:
        return jsonify({'message': 'Diary not found'}), 404

    update_data = request.get_json()

    # DiaryEntry 수정
    diary.update_diary(update_data)

    # DiaryImage 수정 (새로 추가된 이미지는 생성, 기존 이미지는 수정)
    images = update_data.get('images', [])
    for image_data in images:
        if 'image_id' in image_data:
            image = DiaryImage.get_instance(image_data['image_id'])
            if image:
                image.update_image(image_data)
        else:
            new_image = DiaryImage(entry_id=diary_id, **image_data)
            new_image.add_instance()

    # DiaryTag 수정 (새로 추가된 태그는 생성, 기존 태그는 수정)
    tags = update_data.get('tags', [])
    for tag_data in tags:
        if 'tag_id' in tag_data:
            tag = DiaryTag.get_instance(tag_data['tag_id'])
            if tag:
                tag.update_tag(tag_data)
        else:
            new_tag = DiaryTag(entry_id=diary_id, **tag_data)
            new_tag.add_instance()

    return jsonify({'message': f'Diary ID {diary_id} updated successfully'}), 200


# 사용자의 특정 일기를 조회
@diary_view.route('/<int:user_id>', methods=['GET'])
def get_diary_list(diary_id):
    diary = DiaryEntry.get_instance(diary_id)
    if not diary:
        return jsonify({'message': 'Diary not found'}), 404

    return jsonify({
        'diary': diary.to_json()
    }), 200

# 사용자의 특정 학급의 일기를 조회
@diary_view.route('/<int:user_id>/group-lists/<int:group_id>', methods=['GET'])
def get_group_diaries(user_id, group_id):
    diaries = DiaryEntry.query.filter_by(group_id=group_id, user_id=user_id).all()
    if not diaries:
        return jsonify({'message': 'No diaries found for this group'}), 404

    diary_list = [diary.to_json() for diary in diaries]

    return jsonify(diary_list), 200