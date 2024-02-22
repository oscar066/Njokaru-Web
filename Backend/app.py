
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = Flask(__name__)
CORS(app)

# Configure Flask Mail
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 25
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = 'oscarkaruga1@gmail.com'

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

    msg = Message('New Contact Form Submission',
                  recipients=['your_admin@example.com'])  # Change to your email

    msg.body = f'''
    Full Name: {data.get('fullName')}
    Email: {data.get('email')}
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
