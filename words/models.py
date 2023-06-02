from django.db import models

# Create your models here.
class Country(models.Model):
    id = models.CharField(default='nulo', max_length=5, primary_key=True)
    Name = models.CharField(default='nulo', max_length=200)
    Flag = models.CharField(default='nulo', max_length=4000)

class Word(models.Model):
    id = models.IntegerField(primary_key=True)
    Word = models.CharField(max_length=5)
    Country = models.ForeignKey(Country, on_delete=models.CASCADE)
    Clue = models.CharField(max_length=400)


    
