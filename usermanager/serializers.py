from rest_framework.serializers import ModelSerializer
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'nombre','username', 'password', 'email')
        read_only_fields = ('id',)