from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework.serializers import IntegerField, CharField, DateTimeField
from .models import Word, Country, Time


class WordSerializer(ModelSerializer):
    class Meta:
        model = Word
        fields = ('id', 'Word','Country', 'Clue')
        read_only_fields = ('id',)

class CountrySerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'Name', 'Flag')
        read_only_fields = ('id',) 

class TimeSerializer(Serializer):
    time = DateTimeField()
    Wid = IntegerField()
    
    def create(self, validated_data):
        return Time.objects.create(**validated_data)

class WordCountry():
    id = IntegerField()
    Word = CharField(max_length=200)
    Clue = CharField(max_length=200)
    Name = CharField(max_length=200)
    Flag = CharField(max_length=200)

class WordCountrySerializer(Serializer):
    id = IntegerField()
    Word = CharField(max_length=200)
    Clue = CharField(max_length=200)
    Name = CharField(max_length=200)
    Flag = CharField(max_length=200)

    def create(self, validated_data):
        return WordCountry.objects.create(**validated_data)

