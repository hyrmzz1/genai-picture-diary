from flask import Flask, render_template
from src.api.models.user import User
from src.api.models import db_migrate_setup
from src.api.models import get_all_admin_models

def create_app(config, mode):
    '''
    플라스크의 팩토리 지정함수(app 객체 생성 함수)
    app 객체를 생성할 때 전역으로 접근하지 못하게 함 
    즉, 순환 참조 방지
    '''
    app = Flask(__name__)
    app.config.from_object(config) # 환경변수 설정 코드
    app.secret_key = config.SECRET_KEYS[f'{mode}_SECRET_KEY']
    app.config['mode'] = mode.upper()

    # g_db, g_migrate init + 테이블 생성
    db_migrate_setup(app)

    # admin 페이지에 모델뷰 추가
    add_admin_view(app)

    # blueprint 등록 코드, url_prefix를 기본으로 함
    add_blueprint(app)

    # login_manager 설정 코드
    set_login_manager(app)

    # create_user, update_all_model_instances 명령어 추가
    add_cli(app)

    # sqlalchemy 쿼리 로깅 확인용 
    # import logging
    # logging.basicConfig()
    # logging.getLogger('sqlalchemy.engine').setLevel(logging.DEBUG)

    return app

def add_admin_view(app):
    # admin 페이지에 모델뷰 추가
    from flask_admin import Admin
    admin = Admin(app, name='MyBlog', template_mode='bootstrap3')
    models_list, session = get_all_admin_models()
    for (admin_model, model) in models_list:
        admin.add_view(admin_model(model, session))

def add_blueprint(app):
    from src.views.alert import alert_view
    app.register_blueprint(alert_view)

    @app.route('/')
    def home():
        from src.api.models.user import User
        from src.api.models.user_group import UserGroup
        users = User.get_all()
        user_groups = UserGroup.get_all()
        return render_template('home.html', users=users, user_groups=user_groups)
    
    pass
    # from api.views import views
    # app.register_blueprint(views, name='views')
    # from api.auth import auth
    # app.register_blueprint(auth, name='auth', url_prefix='/auth')

def set_login_manager(app):
    from flask_login import LoginManager
    login_manager = LoginManager()
    login_manager.init_app(app) # app 연결
    login_manager.login_view = 'home' # 로그인을 꼭 해야하는 페이지 접근 시 home 리다이렉트 설정 

    # login_required 실행 전 사용자 정보 조회 메소드
    @login_manager.user_loader
    def user_loader(user_id):
        return User.get_instance_by_id(user_id)
    
def add_cli(app):
    from click import command               # 커맨드 라인 인터페이스 작성
    from flask.cli import with_appcontext   # Flask 애플리케이션 컨텍스트
    from sqlite3 import IntegrityError      # unique 제약조건 위배
    @command(name="create_user")
    @with_appcontext
    def create_user():
        fullname = input("Enter fullname : ")
        nickname = input("Enter nickname : ")
        login_id = input("Enter login_id : ")
        password = input("Enter password : ")
        user_type = input("Enter user_type(0=student, 1=teacher, 2=admin): ")

        user_type = int(user_type) if user_type.isdigit() else 0

        try:
            admin_user = User(
                fullname = fullname,
                nickname = nickname,
                login_id = login_id,
                password = password,
                user_type = user_type
            )
            admin_user.add_instance()
            print(f"User created!\n", admin_user)
        except IntegrityError:
            # 빨간색으로 표시
            print('\033[31m' + "Error : username or email already exists.")

    # app에 등록
    app.cli.add_command(create_user)
