from django.db import models

# Create your models here.
class User(models.Model):
    nombre = models.CharField(max_length=200),
    username = models.CharField(max_length=200),
    password = models.CharField(max_length=200),
    email = models.CharField(max_length=200)
