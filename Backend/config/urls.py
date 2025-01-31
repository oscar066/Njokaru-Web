
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('api/accounts/', include('accounts.urls')),  
    path('api/products/', include('products.urls')),
    path('api/contact/', include('contact.urls')),
    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
