from django.db import models

# Create your models here.


# class AddGame1(models.Model):
#     name=models.CharField(max_length=30)
#     type_name=models.CharField(max_length=40)
#     review=models.IntegerField()
#     download=models.IntegerField()

#     image=models.ImageField(upload_to="game_images/",blank=True)
#     def __str__(self):
#         return self.name

class Student(models.Model):
    name=models.CharField(max_length=30)
    age=models.IntegerField()
    marks=models.IntegerField(blank=True,null=True)

    def __str__(self):
        return self.name