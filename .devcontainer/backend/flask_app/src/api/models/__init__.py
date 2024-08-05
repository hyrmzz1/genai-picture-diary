def db_migrate_setup(app):
    from .base import g_db, g_migrate
    g_db.init_app(app)
    g_migrate.init_app(app, g_db)
    with app.app_context():
        # g_db.Model 상속한 모든 클래스 추적해서 테이블 생성
        g_db.create_all()

from .user import User, UserAdmin
from .image import Image, ImageAdmin
from .alert import Alert, AlertAdmin
from .user_group import UserGroup, UserGroupAdmin
from .diary_entry import DiaryEntry, DiaryEntryAdmin
from .diary_image import DiaryImage, DiaryImageAdmin
from .diary_tag import DiaryTag, DiaryTagAdmin
from .diary_comment import DiaryComment, DiaryCommentAdmin

def get_model(arg):
    models = {
        'user': User,
        'image': Image,
        'alert': Alert,
        'user_group': UserGroup,
        'diary_entry': DiaryEntry,
        'diary_image': DiaryImage,
        'diary_tag': DiaryTag,
        'diary_comment': DiaryComment,
    }
    return models[arg]

def get_admin_model(arg):
    models = {
        'user': UserAdmin,
        'image': ImageAdmin,
        'alert': AlertAdmin,
        'user_group': UserGroupAdmin,
        'diary_entry': DiaryEntryAdmin,
        'diary_image': DiaryImageAdmin,
        'diary_tag': DiaryTagAdmin,
        'diary_comment': DiaryCommentAdmin,
    }
    return models[arg]

def get_all_admin_models():
    from .base import g_db
    arg_list = ['user', 'image', 'alert', 'user_group','diary_entry', 'diary_image', 'diary_tag', 'diary_comment' ]
    return [[get_admin_model(arg), get_model(arg)] for arg in arg_list], g_db.session