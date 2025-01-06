
import requests
from django.conf import settings
from django.http import JsonResponse

def get_weather(request):
    city = request.GET.get('city', 'New York') 
    api_key = '2cededd4d678fd5f49ea98ae3d4b849b'
    url = f"{settings.WEATHER_BASE_URL}?q={city}&appid={api_key}"

    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()  # Convert the JSON response to a Python dict
        print(data)
        return JsonResponse(data) 
   
     # Return the weather data as a JSON response
    else:
        return JsonResponse({"error": "Unable to fetch weather data"}, status=400)

from django.urls import path


urlpatterns = [

    path('', get_weather), 
    path('weather/', get_weather, name='get_weather'),
]
 