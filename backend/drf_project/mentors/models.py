from django.db import models

# Create your models here.
class Mentor(models.Model):
    mentor_id = models.CharField(max_length=10, 
                                 primary_key=True)
    mentor_name = models.CharField(max_length=25)
    mentor_email = models.EmailField()
    mentor_expertise = models.CharField(max_length=100,
                                        null=True, blank=True)

    def __str__(self):
        return self.mentor_name