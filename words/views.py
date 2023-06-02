from django.shortcuts import render
from .models import Word, Country
from rest_framework import viewsets, permissions
from rest_framework.response import Response
import random
import datetime
from .serializers import WordSerializer, CountrySerializer
import os

# Create your views here.
class allWord(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WordSerializer

class getWords(viewsets.ModelViewSet):    
    def get_queryset(self):
        if (self.created != datetime.date.today()):
            random_idx = random.randint(0, Word.objects.count() - 1)
            queryset = Word.objects.filter(id=random_idx)
            self.created = datetime.date.today()
            return queryset
    permission_classes = [permissions.AllowAny]
    serializer_class = WordSerializer

    def post(self, request, format=None):
        serializer = WordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
    def put(self, request, id, format=None):
        post= self.get_object(id)
        serializer = WordSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

class getRandomWord(viewsets.ModelViewSet):
    def get_queryset(self):
        random_idx = random.randint(0, Word.objects.count() - 1)
        queryset = Word.objects.filter(id=random_idx)
        return queryset
    permission_classes = [permissions.AllowAny]
    serializer_class = WordSerializer

class getCountry(viewsets.ModelViewSet):
    def get_queryset(self):
        post= self.get_object(id)
        queryset = Country.objects.filter()
        return queryset
    permission_classes = [permissions.AllowAny]
    serializer_class = CountrySerializer

    def get(self, request, format=None):
        post= self.get_object(request.data.get('id'))
        serializer = CountrySerializer(post)
        return Response(serializer.data)

