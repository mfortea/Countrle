from django.shortcuts import render
from .models import User
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from .serializers import UserSerializer

# Create your views here.
class getUsers(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer