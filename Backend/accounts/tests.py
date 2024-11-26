from django.test import TestCase
from django.contrib.auth import get_user_model

#import dotenv()

# Create your tests here.

class CustomUserTests(TestCase):

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            username="oscar",
            email='oscarkaruga1@gmail.com',
            password='oscar12'
        )
        self.assertEqual(user.username, 'oscar')
        self.assertEqual(user.email, 'oscarkaruga1@gmail.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)


    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(
            username="superadmin",
            email="superadmin@gmail.com",
            password="testpass123"
        )
        self.assertEqual(admin_user.username, 'superadmin')
        self.assertEqual(admin_user.email, 'superadmin@gmail.com')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
