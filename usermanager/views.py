from django.shortcuts import render
from .models import User, Statics
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer, StaticsSerializer
import os
import hashlib

# Create your views here.
@api_view(['POST'])
def login(request):
    if(request.method == 'POST'):
        try:
            username = request.query_params.get('username')
            password = (hashlib.sha256(request.query_params.get('password').encode()).hexdigest())
            user = User.objects.get(username=username, password=password)
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data)
        except:
            return Response("Usuario no encontrado", status=404)
    
@api_view(['GET','POST', 'PUT'])
def getUsers(request):
    if request.method == 'GET':
        try:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        except:
            return Response("Error al comunicar con la API", status=500)

    if request.method == 'POST':
        data={
            'username': request.query_params.get('username'),
            'password': (hashlib.sha256(request.query_params.get('password').encode()).hexdigest()),
            'e-mail': request.query_params.get('e-mail'),
        }
        serializer = UserSerializer(data=data)
        data={
            'user': request.query_params.get('username'),
            'score': 0,
            'time': 0.0,
            'totalWords': 0
        }
        serializer2 = StaticsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            if serializer2.is_valid():
                serializer2.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    if request.method == 'PUT':
        username = request.query_params.get('username')
        password = (hashlib.sha256(request.query_params.get('passwordOld').encode()).hexdigest())
        passwordNew = (hashlib.sha256(request.query_params.get('passwordNew').encode()).hexdigest())
        user = User.objects.get(username=username)
        pk = user.pk
        if user.password == password:
            data = {
                'id': pk,
                'username': username,
                'password': passwordNew,
                'e-mail': user.email
            }
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.update(instance=user, validated_data=data)
                return Response(serializer.data)
        else:
            return Response("Contraseña incorrecta", status=400)

@api_view(['GET','PUT'])
def ScoreUser(request):
    if request.method == 'GET':
        try:
            username = request.query_params.get('username')
            stats = Statics.objects.get(user=username)
            serializer = StaticsSerializer(stats, many=False)
            return Response(serializer.data)
        except:
            return Response("Estadísticas no encontradas", status=404)
    
    if request.method == 'PUT':
        username = request.query_params.get('username')
        score = request.query_params.get('score')
        time = request.query_params.get('time')
        totalWords = request.query_params.get('totalWords')
        user = Statics.objects.get(user=username)
        pk = user.pk
        data = {
            'id': pk,
            'user': username,
            'score': score,
            'time': time,
            'totalWords': totalWords
        }
        serializer = StaticsSerializer(data=data)
        if serializer.is_valid():
            serializer.update(instance=user, validated_data=data)
            return Response(serializer.data)

@api_view(['GET'])
def getRanking(request):
    ranking = Statics.objects.order_by('-score')[:10]
    serializer = StaticsSerializer(ranking, many=True)
    return Response(serializer.data)