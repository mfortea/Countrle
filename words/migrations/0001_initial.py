# Generated by Django 4.1.7 on 2023-06-02 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.CharField(default='nulo', max_length=5, primary_key=True, serialize=False)),
                ('Name', models.CharField(default='nulo', max_length=200)),
                ('Flag', models.CharField(default='nulo', max_length=4000)),
            ],
        ),
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('Word', models.CharField(max_length=5)),
                ('Country', models.CharField(default='nulo', max_length=15)),
                ('Clue', models.CharField(max_length=400)),
            ],
        ),
    ]
