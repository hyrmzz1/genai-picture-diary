import os
import sys
from datetime import date
# 현재 스크립트의 부모 디렉터리를 상위로 추가
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from test_0_base import TestBase
from src.api.models.diary_entry import DiaryEntry
from src.api.models.diary_image import DiaryImage
from src.api.models.diary_tag import DiaryTag
from src.api.models.diary_comment import DiaryComment

class DiaryTest(TestBase):
    name = 'Diary'

    '''
     0. 각 모델 별 생성 테스트
    '''
    def diary_create(self):
        self.entry1 = DiaryEntry(
            user_id=1,
            group_id=1,
            title='Test Entry 1',
            record_date=date.today(),
            text_content='This is a test diary entry.',
            entry_type='personal'
        )
        self.entry2 = DiaryEntry(
            user_id=1,
            group_id=1,
            title='Test Entry 2',
            record_date=date.today(),
            text_content='This is another test diary entry.',
            entry_type='group'
        )
        self.entry1.add_instance()
        self.entry2.add_instance()

    def diary_image_create(self):
        with open('image1.png', 'rb') as img_file1:
            img_data1 = img_file1.read()
        self.image1 = DiaryImage(
            entry_id=self.entry1.id,
            image_url='image1.png'
        )
        with open('image2.png', 'rb') as img_file2:
            img_data2 = img_file2.read()
        self.image2 = DiaryImage(
            entry_id=self.entry2.id,
            image_url='image2.png'
        )
        self.image1.add_instance()
        self.image2.add_instance()

    def diary_tag_create(self):
        self.tag1 = DiaryTag(
            entry_id=self.entry1.id,
            tag_name='TestTag1'
        )
        self.tag2 = DiaryTag(
            entry_id=self.entry2.id,
            tag_name='TestTag2'
        )
        self.tag1.add_instance()
        self.tag2.add_instance()

    def diary_comment_create(self):
        self.comment1 = DiaryComment(
            entry_id=self.entry1.id,
            user_id=1,
            comment_text='This is a test comment.'
        )
        self.comment2 = DiaryComment(
            entry_id=self.entry2.id,
            user_id=1,
            comment_text='This is another test comment.'
        )
        self.comment1.add_instance()
        self.comment2.add_instance()

    def setUp(self):
        super().setUp()
        self.diary_create()
        self.diary_image_create()
        self.diary_tag_create()
        self.diary_comment_create()

    '''
     1. 각 모델 별 조회 테스트
    '''
    def test_1_get_diary_entry(self):
        entry = self.entry1.get_instance(self.entry1.id)
        self.assertIsNotNone(entry)
        self.assertEqual(entry.title, 'Test Entry 1')

    def test_1_get_diary_image(self):
        image = DiaryImage.get_instance(self.image1.id)
        self.assertIsNotNone(image)
        self.assertEqual(image.image_url, 'image1.png')

    def test_1_get_diary_tag(self):
        tag = DiaryTag.get_instance(self.tag1.id)
        self.assertIsNotNone(tag)
        self.assertEqual(tag.tag_name, 'TestTag1')

    def test_1_get_diary_comment(self):
        comment = DiaryComment.get_instance(self.comment1.id)
        self.assertIsNotNone(comment)
        self.assertEqual(comment.comment_text, 'This is a test comment.')

    '''
     2. 각 모델 별 정보 변경 테스트
    '''
    def test_2_update_diary_entry(self):
        # 유효한 정보
        data = {
            'title': "Updated Test Entry 1",
            'text_content': "This is an updated test diary entry."
        }
        self.entry1.update_diary(data)
        updated_entry = DiaryEntry.get_instance(self.entry1.id)
        self.assertEqual(updated_entry.title, "Updated Test Entry 1")
        self.assertEqual(updated_entry.text_content, "This is an updated test diary entry.")

    def test_2_update_diary_image(self):
        # 유효한 정보
        data = {
            'image_url': "http://example.com/updated_image1.png"
        }
        self.image1.update_image(data)
        updated_image = DiaryImage.get_instance(self.image1.id)
        self.assertEqual(updated_image.image_url, "http://example.com/updated_image1.png")

    def test_2_update_diary_tag(self):
        # 유효한 정보
        data = {
            'tag_name': "UpdatedTestTag1"
        }
        self.tag1.update_tag(data)
        updated_tag = DiaryTag.get_instance(self.tag1.id)
        self.assertEqual(updated_tag.tag_name, "UpdatedTestTag1")

    def test_2_update_diary_comment(self):
        # 유효한 정보
        data = {
            'comment_text': "This is an updated test comment."
        }
        self.comment1.update_comment(data)
        updated_comment = DiaryComment.get_instance(self.comment1.id)
        self.assertEqual(updated_comment.comment_text, "This is an updated test comment.")

    '''
     3. 각 모델 별 삭제 테스트
    '''
    def test_3_delete_diary_entry(self):
        self.entry1.delete_diary(self.entry1.id)
        deleted_entry = DiaryEntry.query.filter_by(id=self.entry1.id).first()
        self.assertIsNone(deleted_entry)

    def test_3_delete_diary_image(self):
        self.image1.delete_image(self.image1.id)
        deleted_image = DiaryImage.query.filter_by(id=self.image1.id).first()
        self.assertIsNone(deleted_image)

    def test_3_delete_diary_tag(self):
        self.tag1.delete_tag(self.tag1.id)
        deleted_tag = DiaryTag.query.filter_by(id=self.tag1.id).first()
        self.assertIsNone(deleted_tag)

    def test_3_delete_diary_comment(self):
        self.comment1.delete_comment(self.comment1.id)
        deleted_comment = DiaryComment.query.filter_by(id=self.comment1.id).first()
        self.assertIsNone(deleted_comment)

    
    '''
     4. 일기, 이미지, 태그 한꺼번에 등록 테스트
    '''
    def test_4_create_diary_with_image_and_tag(self):
        entry_data = {
            'user_id': 1,
            'group_id': 1,
            'title': 'Test Entry 3',
            'record_date': date.today(),
            'text_content': 'This is a test diary entry with image and tag.',
            'entry_type': 'personal'
        }
        image_data = {
            'image_url': b'This is a binary image data'
        }
        tag_data = {
            'tag_name': 'TestTag3'
        }

        new_entry = DiaryEntry(**entry_data)
        new_entry.add_instance()

        new_image = DiaryImage(
            entry_id=new_entry.id,
            **image_data
        )
        new_image.add_instance()

        new_tag = DiaryTag(
            entry_id=new_entry.id,
            **tag_data
        )
        new_tag.add_instance()

        created_entry = DiaryEntry.get_instance(new_entry.id)
        created_image = DiaryImage.query.filter_by(entry_id=new_entry.id).first()
        created_tag = DiaryTag.query.filter_by(entry_id=new_entry.id).first()

        self.assertIsNotNone(created_entry)
        self.assertIsNotNone(created_image)
        self.assertIsNotNone(created_tag)
        self.assertEqual(created_entry.title, 'Test Entry 3')
        self.assertEqual(created_image.image_url, b'This is a binary image data')
        self.assertEqual(created_tag.tag_name, 'TestTag3')

    '''
     5. 일기, 이미지, 태그 한꺼번에 수정 테스트
    '''
    def test_5_update_diary_with_image_and_tag(self):
        entry_data = {
            'title': "Updated Test Entry 1",
            'text_content': "This is an updated test diary entry with updated image and tag."
        }
        image_data = {
            'image_url': b'Updated binary image data'
        }
        tag_data = {
            'tag_name': "UpdatedTestTag1"
        }

        self.entry1.update_diary(entry_data)
        self.image1.update_image(image_data)
        self.tag1.update_tag(tag_data)

        updated_entry = DiaryEntry.get_instance(self.entry1.id)
        updated_image = DiaryImage.query.filter_by(entry_id=self.entry1.id).first()
        updated_tag = DiaryTag.query.filter_by(entry_id=self.entry1.id).first()

        self.assertEqual(updated_entry.title, "Updated Test Entry 1")
        self.assertEqual(updated_entry.text_content, "This is an updated test diary entry with updated image and tag.")
        self.assertEqual(updated_image.image_url, b'Updated binary image data')
        self.assertEqual(updated_tag.tag_name, "UpdatedTestTag1")

    '''
     6. 일기, 이미지, 태그 한꺼번에 삭제 테스트
    '''
    def test_6_delete_diary_with_image_and_tag(self):
        self.entry1.delete_diary(self.entry1.id)
