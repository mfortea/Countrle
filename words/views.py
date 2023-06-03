from django.shortcuts import render
from .models import Word, Country
from rest_framework.decorators import api_view
from rest_framework import viewsets, permissions
from rest_framework.response import Response
import random
import datetime
from .serializers import WordSerializer, CountrySerializer

# Create your views here.
@api_view(['GET'])
def allWord(request):
    if(request.method == 'GET'):
        try:
            if(created!=datetime.date.today() or not created):
                random_idx = random.randint(0, Word.objects.count() - 1)
                survey = Word.objects.filter(id=random_idx)
                serializer = WordSerializer(survey, many=True)
                created = datetime.date.today()
                return Response(serializer.data)
        except:
            random_idx = random.randint(0, Word.objects.count() - 1)
            survey = Word.objects.filter(id=random_idx)
            serializer = WordSerializer(survey, many=False)
            created = datetime.date.today()
            return Response(serializer.data)

class getWords(viewsets.ModelViewSet):    
    def get_queryset(self):
        with open('words.txt', 'r') as f:
            for line in f:
                created = line.strip()
                created = datetime.datetime.strptime(created, '%Y-%m-%d').date()
        if (created!=datetime.date.today() or not created):
            random_idx = random.randint(0, Word.objects.count() - 1)
            queryset = Word.objects.filter(id=random_idx)
            created = datetime.date.today()
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
        queryset = Country.objects.filter()
        return queryset
    permission_classes = [permissions.AllowAny]
    serializer_class = CountrySerializer

    def get(self):
        post= self.request.id
        queryset = Country.objects.filter(id = post)
        return Response(queryset)

