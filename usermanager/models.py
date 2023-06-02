from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Statics(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    time = models.FloatField(default=0.0)
    totalWords = models.IntegerField(default=0)