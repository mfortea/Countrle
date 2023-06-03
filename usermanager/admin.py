from django.contrib import admin
from usermanager.models import Statics

# Register your models here.
class StaticsAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'score', 'time', 'totalWords')

admin.site.register(Statics, StaticsAdmin)

