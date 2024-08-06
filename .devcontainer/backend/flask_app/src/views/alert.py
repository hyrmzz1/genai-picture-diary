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

    alert_fields = ['alert_type', 'message', 'group_id', 'user_id']
    alert = Alert(**{field: data[field] for field in alert_fields})
    if alert:
        alert.send_alert()

    return jsonify({'message': f'{data["alert_type"]} alert sent successfully'}), 200