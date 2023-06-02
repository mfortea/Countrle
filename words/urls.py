from django.contrib import admin
from django.urls import path, include
from .views import getWords, getCountry, getRandomWord
from rest_framework import routers

router = routers.DefaultRouter()

router.register('word', getWords, 'word')
router.register('country', getCountry, 'country')
router.register('random', getRandomWord, 'random')

urlpatterns = router.urls