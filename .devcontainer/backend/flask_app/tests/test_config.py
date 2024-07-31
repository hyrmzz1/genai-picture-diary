import os

class TestConfig():
    '''
    sqlalchemy 관련 config
    '''
    BASE_DIR = os.path.dirname(__file__)
    BASE_DB_NAME = 'test.db'

    SQLALCHEMY_DATABASE_URI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, BASE_DB_NAME))
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    WTF_CSRF_ENABLED = False

    SECRET_KEYS = {
        'TEST_SECRET_KEY': 'test',
    }