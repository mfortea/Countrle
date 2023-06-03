from django.shortcuts import render
from .models import User, Statics
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer, StaticsSerializer
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here.
@api_view(['GET'])
def login(request):
    try:
        if(request.method == 'GET'):
            username = request.query_params.get('username')
            password = request.query_params.get('password')
            user = User.objects.get(username=username, password=password)
            serializer = UserSerializer(user, many=False)
            if serializer.is_valid():
                return Response(serializer.data)
    except:
        return Response("Usuario no encontrado", status=404)

class getUsers(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = User.objects.all()
        username = self.request.query_params.get('username')
        if username:
            queryset = User.objects.get(username=username)
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