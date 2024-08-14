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
    diary_fields = ['user_id', 'group_id', 'title', 'record_date', 'text_content', 'entry_type']
    new_diary = DiaryEntry(**{field: data[field] for field in diary_fields})
    new_diary.add_instance()
    # DiaryImage 생성
    images = data.get('images', [])
    for image_data in images:
        # Exclude 'id' from image_data
        filtered_image_data = {k: v for k, v in image_data.items() if k != 'id'}
        new_image = DiaryImage(entry_id=new_diary.id, **filtered_image_data)
        new_image.add_instance()

    # DiaryTag 생성
    tags = data.get('tags', [])
    for tag_data in tags:
        # Exclude 'id' from tag_data
        filtered_tag_data = {k: v for k, v in tag_data.items() if k != 'id'}
        new_tag = DiaryTag(entry_id=new_diary.id, **filtered_tag_data)
        new_tag.add_instance()


    return jsonify({'message': f'New diary created with ID {new_diary.id}'}), 201

# 기존 일기 상세 내용 반환 (DiaryEntry, DiaryImage, DiaryTag)
@diary_view.route('/<int:diary_id>', methods=['GET'])
def get_diary(diary_id):
    diary = DiaryEntry.get_instance(diary_id)
    if not diary:
        return jsonify({'message': 'Diary not found'}), 404

    # DiaryImage 및 DiaryTag 조회
    diary.images = DiaryImage.query.filter_by(entry_id=diary_id).all()
    diary.tags = DiaryTag.query.filter_by(entry_id=diary_id).all()

    return jsonify({
        'diary': diary.to_json()
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
        if 'id' in image_data:
            image = DiaryImage.get_instance(image_data['id'])
            if image:
                image.update_image(image_data)
        else:
            new_image = DiaryImage(entry_id=diary_id, **image_data)
            new_image.add_instance()

    # DiaryTag 수정 (새로 추가된 태그는 생성, 기존 태그는 수정)
    tags = update_data.get('tags', [])
    for tag_data in tags:
        if 'id' in tag_data:
            tag = DiaryTag.get_instance(tag_data['id'])
            if tag:
                tag.update_tag(tag_data)
        else:
            new_tag = DiaryTag(entry_id=diary_id, **tag_data)
            new_tag.add_instance()

    return jsonify({'message': f'Diary ID {diary_id} updated successfully'}), 200


# 사용자의 특정 일기를 조회
@diary_view.route('/<string:user_id>', methods=['GET'])
def get_user_diaries(user_id):
    diaries = DiaryEntry.query.filter_by(user_id=user_id).all()
    if not diaries:
        return jsonify({'message': 'Diary not found'}), 404

    diary_list = [diary.to_json() for diary in diaries]

    return jsonify(diary_list), 200

# 사용자의 특정 학급의 일기를 조회
@diary_view.route('/<string:user_id>/<string:group_id>', methods=['GET'])
def get_group_diaries(user_id, group_id):
    diaries = DiaryEntry.query.filter_by(group_id=group_id, user_id=user_id).all()
    if not diaries:
        return jsonify({'message': 'No diaries found for this group'}), 404

    diary_list = [diary.to_json() for diary in diaries]

    return jsonify(diary_list), 200

@diary_view.route('/image', methods=['POST'])
def add_diary_image():
    data = request.get_json()

    # option에 따른 ai 이미지 생성 필요 (option : base, line 등)


    # 생성된 이미지를 JSON으로 반환
    return jsonify({'message': 'new_image.to_json()'}), 201
