from django.shortcuts import render
from .models import Word, Country
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
import random
import datetime
from .serializers import WordSerializer, CountrySerializer

# Create your views here.
class allWord(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WordSerializer

class getWords(viewsets.ModelViewSet):
    queryset = None
    created = None
    if (queryset == None or created != datetime.date.today()):
        random_idx = random.randint(0, Word.objects.count() - 1)
        queryset = Word.objects.filter(id=random_idx)
        created = datetime.date.today()
    permission_classes = [permissions.AllowAny]
    serializer_class = WordSerializer

class getRandomWord(viewsets.ModelViewSet):
    random_idx = random.randint(0, Word.objects.count() - 1)
    queryset = Word.objects.filter(id=random_idx)
    permission_classes = [permissions.AllowAny]
    serializer_class = WordSerializer

class getCountry(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CountrySerializer