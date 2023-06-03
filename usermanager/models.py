from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Statics(models.Model):
    user = models.CharField(max_length=200)
    score = models.IntegerField(default=0)
    time = models.FloatField(default=0.0)
    totalWords = models.IntegerField(default=0)