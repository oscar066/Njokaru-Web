
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

    # path('api/docs/', TemplateView.as_view(template_name='swagger-ui.html'), name='api-docs'), 
      # API documentation
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Custom error handlers
#handler404 = 'config.views.custom_404_view'
#handler500 = 'config.views.custom_500_view'
