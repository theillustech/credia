# Core django imports
from django import forms

# Imports from our app
from core.models.Contact import ContactUsFormModel


class ContactUsForm(forms.ModelForm):
    class Meta:
        model = ContactUsFormModel
        fields = '__all__'
