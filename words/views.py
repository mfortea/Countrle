from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from .serializers import UserSerializer
# Create your views here.
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    data = request.data
    user = User.objects.create(
        username=data['username'],
        password=data['password'],
        email=data['email']
    )
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def putUser(request, pk):
    data = request.data
    user = User.objects.get(username=pk)
    serializer = UserSerializer(user, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request, pk):
    user = User.objects.get(username=pk)
    user.delete()
    return Response ('Usuario eliminado')

def signup(request):

    if request.method == 'GET':
        return render(request, 'signup.html',{
        'form': UserCreationForm
         })

    else:
        if (request.POST['password1'] == request.POST['password2']):
            #register user
            try:
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'])
                user.save()
                return HttpResponse('Usuario creado correctamente')
            except:
                return HttpResponse('Error en la base de datos')
        else:
            return HttpResponse('Las contraseñas no coinciden')
    

def home(request):
    return render(request, 'home.html')