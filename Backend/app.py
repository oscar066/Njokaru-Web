
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = Flask(__name__)
CORS(app)

# Configure Flask Mail
app.config['MAIL_SERVER'] = 'live.smtp.mailtrap.io'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
#app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
#app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_USERNAME'] = 'api'
app.config['MAIL_PASSWORD'] = 'f29741c4bf7f75906b99c21041460f77'
app.config['MAIL_DEFAULT_SENDER'] = 'mailtrap@demomailtrap.com'


mail = Mail(app)

@app.route('/')
def index():
    return '<h1>Hello Oscar!</h1>'

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json  # Assuming you're sending JSON data from the React app

    recipient_email = data.get('email')

    if not recipient_email:
        return jsonify({'success': False, 'message': 'Email address not provided.'})

    msg = Message('New Contact Form Submission', recipients=[recipient_email])

    msg.body = f'''
    Full Name: {data.get('fullName')}
    Email: {recipient_email}
    Phone Number: {data.get('phoneNumber')}
    Service Type: {data.get('serviceType')}
    Message: {data.get('message')}
    '''

    try:
        mail.send(msg)
        return jsonify({'success': True, 'message': 'Email sent successfully!'})
    except Exception as e:
        print(e)
        return jsonify({'success': False, 'message': 'Failed to send email.'})
    
if __name__ == '__main__':
    app.run(debug=True)
