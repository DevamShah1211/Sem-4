from django.db import models

# Create your models here.
class AddGame(models.Model):
    name=models.CharField(max_length=30)
    type_name=models.CharField(max_length=40)
    review=models.IntegerField()
    download=models.IntegerField()
    size=models.IntegerField()
    image=models.ImageField(upload_to="game_images/",black=True)
    def __str__(self):
        return self.name