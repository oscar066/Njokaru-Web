from django.urls import path
from .views import ContactAPIView

urlpatterns = [
    path('', ContactAPIView.as_view(), name='contact'),
]