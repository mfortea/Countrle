from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from .models import Word, Country
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from .serializers import WordSerializer, CountrySerializer

# Create your views here.
class getWords(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WordSerializer

class getCountry(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CountrySerializer