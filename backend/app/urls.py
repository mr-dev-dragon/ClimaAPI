from django.urls import path
from .views import get_weather

urlpatterns = [
    path('', get_weather),  # You can set this to an index page if you'd like to return a homepage
    path('weather/', get_weather, name='get_weather'),
]
