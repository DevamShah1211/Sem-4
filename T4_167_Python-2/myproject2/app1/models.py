from django.db import models

# Create your models here.
class Addgame(models.Model):
    name=models.CharField(max_length=30)
    type_name=models.CharField(max_length=20)
    review=models.IntegerField()
    download=models.IntegerField()

    image=models.ImageField(upload_to="game_images/",blank=True)
    def __str__(self):
        return self.name

