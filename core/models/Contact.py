# Core django imports
from django.db import models

# Create your models here.


class ContactUsFormModel(models.Model):
    name = models.CharField(max_length=220, verbose_name="Name")
    firm = models.CharField(max_length=220, verbose_name="Company or Firm")
    email = models.EmailField(max_length=220, verbose_name="Email")
    phone = models.CharField(max_length=220, verbose_name="Phone Number")
    message = models.TextField(verbose_name="Message")
    hau = models.CharField(max_length=12, default=None, null=True,
                           blank=True, verbose_name="How did you hear about us?")
    ii = models.CharField(max_length=10, default=None, null=True,
                          blank=True, verbose_name="Interested in")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "From: " + self.name

    class Meta:
        ordering = ["date"]
        verbose_name = "Contact Form Applicant"
        verbose_name_plural = "Contact Form Applicants"


class ContactBuilder(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    phone = models.IntegerField(default=0)
    msg = models.TextField()
    floorPlan = models.CharField(max_length=6)

    def __str__(self):
        return self.email


class Contact(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    phone = models.IntegerField
    sub = models.CharField(max_length=70)
    msg = models.TextField()

    def __str__(self):
        return self.email
