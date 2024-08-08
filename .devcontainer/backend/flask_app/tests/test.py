import unittest

if __name__ == '__main__':
    
    # 유저 정보 변경 테스트
    from test_1_user import UserTest
    user_test = unittest.TestLoader().loadTestsFromTestCase(UserTest) # 해당 클래스 모든 테스트 케이스 실행
    # user_test = unittest.TestLoader().loadTestsFromName('test_1_user.UserTest.test_1_update_user') # 해당 메서드만 테스트
    # unittest.TextTestRunner(verbosity=2).run(auth_test)

    unittest.main(argv=[''], verbosity=2, exit=False) # 전체 테스트 실행
    pass