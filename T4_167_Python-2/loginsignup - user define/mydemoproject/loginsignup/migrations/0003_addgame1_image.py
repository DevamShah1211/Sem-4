# Generated by Django 4.2.5 on 2025-07-09 01:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginsignup', '0002_addgame1'),
    ]

    operations = [
        migrations.AddField(
            model_name='addgame1',
            name='image',
            field=models.ImageField(blank=True, upload_to='game_images/'),
        ),
    ]
