from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Country(models.Model):
    id = models.CharField(default='nulo', max_length=5, primary_key=True)
    Name = models.CharField(default='nulo', max_length=200)
    Flag = models.CharField(default='nulo', max_length=4000)

class Word(models.Model):
    id = models.IntegerField(primary_key=True)
    Word = models.CharField(max_length=5)
    Country = models.CharField(default='nulo', max_length=15)
    Clue = models.CharField(max_length=400)

class Time(models.Model):
    time = models.DateField()
    Wid = models.IntegerField(default=0)

    
