from flask import Blueprint, jsonify

# Blueprint 생성
user_view = Blueprint('user_view', __name__, url_prefix='/user')
