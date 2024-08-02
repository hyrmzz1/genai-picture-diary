from flask import Blueprint, render_template, request
from flask.json import jsonify

from src.api.models.alert import Alert

# app.register_blueprint(alert, name='alert', url_prefix='/alert')
alert_view = Blueprint('alert_view', __name__, url_prefix='/alert')

@alert_view.route('/list')
def alerts():
    alerts = Alert.get_all()
    return render_template('alerts.html', alerts=alerts)

@alert_view.route('/send-alert', methods=['POST'])
def send_alert():
    content_type = request.content_type
    if content_type == 'application/json':
        data = request.get_json()
    else:
        data = request.form

    alert_type = data.get('alert_type')
    message = data.get('message')
    group_id = data.get('group_id')
    user_id = data.get('user_id')
    
    # 그룹에 알림 보내기
    alert = Alert(alert_type=alert_type, group_id=group_id, user_id=user_id, message=message)
    if alert:
        alert.send_alert()

    return jsonify({'message': f'{alert_type} alert sent successfully'}), 200