"""countrle URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from words.views import getWords, getCountry, getRandomWord, allWord
from usermanager.views import getUsers, getBest, login
from rest_framework import routers


router = routers.DefaultRouter()

router.register('words', getWords, basename='words')
router.register('random', getRandomWord, basename='random')
router.register('country', getCountry,  basename='country')
router.register('users', getUsers, basename='users')
router.register('best', getBest, basename='best')

urlpatterns = [
    path('admin/', admin.site.urls),  # Ruta del sitio de administración
    path('api/', include(router.urls)),  # Rutas del API
    path('api/word', allWord, name='allWord'),
    path('api/user', login, name='login'),
]

