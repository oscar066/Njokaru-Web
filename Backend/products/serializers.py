from rest_framework import serializers
from .models import Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    class meta:
        model = ProductImage
        fields = ['id', 'product', 'image']

class ProductSerializer(serializers.ModelSerializer):
    additional_images = ProductImageSerializer(many=True, read_only=True)
    price = serializers.DecimalField(max_digits=10, decimal_places=2, coerce_to_string=False)

    class Meta:
        model = Product
        fields = '__all__'