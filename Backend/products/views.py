
from rest_framework import generics, viewsets
from .serializers import ProductSerializer, ProductImageSerializer
from .models import Product, ProductImage

# List view for all products
class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Detailed view for a single product (retrieve, update and delete)
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# List and create view for product Images
class ProductImageListView(generics.ListCreateAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer

# Detailed view for a single Product Image 
class ProductImageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer