from django.contrib import admin
from django.urls import path, include
from .views import getWords, getCountry
from rest_framework import routers

router = routers.DefaultRouter()

router.register('word', getWords, 'wo')
router.register('country', getCountry, 'country')

urlpatterns = router.urls