# Core django imports
from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=250)
    location = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=False, auto_now=False)
    description = models.TextField()
    image = models.FileField(blank=True)

    def __str__(self):
        return self.title


class EventImage(models.Model):
    event = models.ForeignKey(Event, default=None, on_delete=models.CASCADE)
    images = models.FileField(upload_to='img/events')

    def __str__(self):
        return self.event.title
