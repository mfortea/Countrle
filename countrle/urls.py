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
from usermanager.views import getUsers
from rest_framework import routers

router = routers.DefaultRouter()

#router.register('admin', admin.site.urls, 'admin')
router.register('api/words', getWords, 'words')
router.register('api/random', getRandomWord, 'random')
router.register('api/country', getCountry, 'country')
router.register('api/country/<str:id>', getCountry, 'countrybyId')
router.register('api/users', getUsers, 'user')
router.register('api/allwords', allWord, 'allwords')

urlpatterns = router.urls
