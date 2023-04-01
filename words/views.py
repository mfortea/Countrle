from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import HttpResponse
# Create your views here.
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