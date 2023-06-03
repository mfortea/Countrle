from django.shortcuts import render
from .models import User, Statics
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer, StaticsSerializer
import os

# Create your views here.
@api_view(['POST'])
def login(request):
    if(request.method == 'POST'):
        try:
            username = request.query_params.get('username')
            password = request.query_params.get('password')
            user = User.objects.get(username=username, password=password)
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data)
        except:
            return Response("Usuario no encontrado", status=404)
    
@api_view(['GET','POST'])
def getUsers(request):
    if request.method == 'GET':
        try:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        except:
            return Response("Error al comunicar con la API", status=500)

    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        serializer2 = StaticsSerializer(user=request.data.get('username'))
        if serializer.is_valid():
            serializer.save()
            serializer2.save()
            return Response(serializer.data)

class getBest(viewsets.ModelViewSet):
    queryset = Statics.objects.order_by('score')[0:10]
    permission_classes = [permissions.AllowAny]
    serializer_class = StaticsSerializer