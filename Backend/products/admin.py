from django.contrib import admin
from .models import Product, ProductImage

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'availability', 'created_at')

admin.site.register(ProductImage)
