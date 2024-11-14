from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    category = models.CharField(max_length=100, default='Uncategorized')
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    description = models.TextField(default='No description available')
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    quantity = models.IntegerField(default=10) 
    dimensions = models.CharField(max_length=255, default='Not Specified')
    material = models.CharField(max_length=255, default='Not Specified')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='additional_images')
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return f"Image for {self.product.image}"