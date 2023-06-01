from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(default='nulo', max_length=200)
    flag = models.CharField(default='nulo', max_length=4000)

class Word(models.Model):
    word = models.CharField(max_length=5)
    country = models.ForeignKey(Country, default=1, on_delete=models.CASCADE)
    clue = models.CharField(max_length=400)


    
