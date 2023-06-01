from rest_framework.serializers import ModelSerializer
from .models import Word, Country

class WordSerializer(ModelSerializer):
    class Meta:
        model = Word
        fields = ('_id', 'Word','Country', 'Clue')
        read_only_fields = ('_id',)

class CountrySerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = ('_id', 'Name', 'Flag')
        read_only_fields = ('_id',) 