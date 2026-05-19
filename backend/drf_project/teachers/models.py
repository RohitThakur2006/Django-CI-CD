from django.db import models

# Create your models here.
class Teacher(models.Model):
    teacher_id = models.CharField(max_length=10)
    name = models.CharField(max_length=50)
    email = models.EmailField()

    def __str__(self):
        return self.name
