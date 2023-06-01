from django.shortcuts import render
from .models import User
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import UserSerializer

# Create your views here.
class getUsers(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

class UsersByName(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = User.objects.filter(username= self.request.query_params.get('username', None))  # Obtén el parámetro de consulta 'nombre'
        return queryset
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

    def put(self, request, username=None):
        user = User.objects.filter(username=username)
        serializer = UserSerializer
        serializer.save()
        return Response(serializer.data)