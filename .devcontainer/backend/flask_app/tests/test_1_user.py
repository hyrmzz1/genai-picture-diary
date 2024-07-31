from tests.test_0_base import TestBase
from src.api.models.user import User

class UserTest(TestBase):
    name = 'User'

    def user_create(self):
        self.user1 = User(
            fullname='user1', 
            nickname='user1', 
            login_id='user1', 
            password='123456', 
            user_type=1
        )
        self.user2 = User(
            fullname='user2', 
            nickname='user2', 
            login_id='user2', 
            password='123456', 
            user_type=1
        )
        self.user1.add_instance()
        self.user2.add_instance()

    def setUp(self):
        super().setUp()
        self.user_create()

    '''
    1. 유저 정보 변경 테스트
    '''
    def test_1_update_user(self):
        # 유효한 정보
        data = {
            'fullname': "update user1",
            'nickname': "update user1"
        }
        self.user1.update_user(data)
        updated_user = User.get_instance(1)
        self.assertEqual(updated_user.fullname, "update user1")
        self.assertEqual(updated_user.nickname, "update user1")

        # 유효하지 않은 정보(nickname 중복 + password 변경 시도)
        data = {
            'nickname': "update user1",
        }
        self.user2.update_user(data)
        updated_user = User.get_instance(2)
        self.assertEqual(updated_user.nickname, "user2")
        data = {
            'fullname': "update user22",
            'nickname': "update user22",
            'password': '111111'
        }
        self.user2.update_user(data)
        updated_user = User.get_instance(2)
        self.assertEqual(updated_user.fullname, "user2")
        self.assertEqual(updated_user.nickname, "user2")
