from django.db import models

# Create your models here.
class Country(models.Model):
    Name = models.CharField(default='nulo', max_length=200)
    Flag = models.CharField(default='nulo', max_length=4000)

class Word(models.Model):
    Word = models.CharField(max_length=5)
    Country = models.ForeignKey(Country, default=1, on_delete=models.CASCADE)
    Clue = models.CharField(max_length=400)


    
