from django.shortcuts import render
from .models import Word, Country, Time
from rest_framework.decorators import api_view
from rest_framework import viewsets, permissions
from rest_framework.response import Response
import random
import datetime
from .serializers import WordSerializer, WordCountrySerializer, TimeSerializer

# Create your views here.
@api_view(['GET'])
def getDayWord(request):
    if(request.method == 'GET'):
        queryset = Word.objects.get(id=79)
        serializer = WordSerializer(queryset, many=False)
        query2 = Country.objects.get(id=queryset.Country)
        data = {
        'id': queryset.id,
        'Word': queryset.Word,
        'Clue': queryset.Clue,
        'Name': query2.Name,
        'Flag': query2.Flag
        }
        serializer = WordCountrySerializer(data, many=False)
        return Response(serializer.data)
        #query = Time.objects.all().last()
        #serializer = TimeSerializer(query, many=False)
        #if(serializer.data.get('time')):
        #    survey = Word.objects.filter(id=serializer.data.get('id'))
        #    serializerWord = WordSerializer(survey, many=True)
        #    data={'time': datetime.date.today(), 'Wid': serializer.data.get('id')}
        #    serializer.update(serializer, data)
        #    return Response(serializerWord.data)
        #else:
        #    random_idx = random.randint(0, Word.objects.count() - 1)
        #    survey = Word.objects.filter(id=random_idx)
        #    serializer = WordSerializer(survey, many=True)
        #    serializer2 = TimeSerializer(data={'time': datetime.date.today(), 'Wid': random_idx})
        #    if serializer2.is_valid():
        #        serializer2.save()
        #        return Response(serializer.data)
        #    return Response(serializer.data)

@api_view(['GET'])
def getRandomWord(request):
    if request.method == 'GET':
        random_idx = random.randint(0, Word.objects.count() - 1)
        queryset = Word.objects.get(id=random_idx)
        serializer = WordSerializer(queryset, many=False)
        query2 = Country.objects.get(id=queryset.Country)
        data = {
        'id': queryset.id,
        'Word': queryset.Word,
        'Clue': queryset.Clue,
        'Name': query2.Name,
        'Flag': query2.Flag
        }
        serializer = WordCountrySerializer(data, many=False)
        return Response(serializer.data)

