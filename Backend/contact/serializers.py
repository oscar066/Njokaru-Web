from rest_framework import serializers
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class ContactMessageSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    message = serializers.CharField()

    def create(self, validated_data):
        # Email sending logic
        sender_email = os.getenv("APP_EMAIL")
        if sender_email is None:
            raise serializers.ValidationError({"error": "APP_EMAIL environment variable is not set."})
        
        receiver_email = validated_data["email"]

        password = os.getenv("APP_PASSWORD")
        if password is None:
            raise serializers.ValidationError({"error": "APP_PASSWORD environment variable is not set."})
        
        subject = f"New Contact Form Submission from {validated_data['name']}"
        body = f"Name: {validated_data['name']}\nEmail: {validated_data['email']}\n\nMessage:\n{validated_data['message']}"

        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = receiver_email
        message["Subject"] = subject
        message.attach(MIMEText(body, "plain"))

        try:
            server = smtplib.SMTP("smtp.gmail.com", 587)
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())
            server.close()

        except Exception as e:
            raise serializers.ValidationError({"error": str(e)})

        return validated_data