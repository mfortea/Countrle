from django.contrib import admin
from words.models import Country, Word

# Register your models here.
class CountryAdmin(admin.ModelAdmin):
    list_display = ('id', 'Name', 'Flag')

class WordAdmin(admin.ModelAdmin):
    list_display = ('id', 'Word', 'Country', 'Clue')

admin.site.register(Country, CountryAdmin)
admin.site.register(Word, WordAdmin)