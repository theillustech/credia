# Third party library imports
from rest_framework import serializers

# Local app imports
from core.models.Contact import ContactUsFormModel


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsFormModel
        fields = "__all__"
