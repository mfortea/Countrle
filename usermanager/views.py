from django.shortcuts import render
from .models import User, Statics
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, StaticsSerializer
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here.
class getUsers(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = User.objects.all()
        username = self.request.query_params.get('username')
        if username:
            queryset = User.objects.filter(username=username)
            password= self.request.query_params.get('password')
            if password:
                queryset = User.objects.filter(username=username, password=password)
        return queryset
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def post(self):
        serializer = UserSerializer(data=self.request.data)
        serializer2 = StaticsSerializer(user=self.request.data.get('username'))
        if serializer.is_valid():
            serializer.save()
            serializer2.save()
            return Response(serializer.data)

class getBest(viewsets.ModelViewSet):
    queryset = Statics.objects.order_by('score')[0:10]
    permission_classes = [permissions.AllowAny]
    serializer_class = StaticsSerializer