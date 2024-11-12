from django.urls import path
from .views import ProductListView, ProductDetailView, ProductImageListView, ProductImageDetailView

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('images/', ProductImageListView.as_view(), name='product-image-list'),
    path('images/<int:pk>/', ProductImageDetailView.as_view(), name='product-image-detail'),
]