# Core django imports
from django.db import models

# Create your models here.


class PropertyModel(models.Model):
    PROPERTY_TYPES = (
        ('Flat/Apartment', 'Flat/Apartment'),
        ('Residential', 'Residential'),
        ('Villa', 'Villa'),
        ('Builder Floor Apartment', 'Builder Floor Apartment'),
        ('Residential Land/Plot', 'Residential Land/Plot'),
        ('Penthouse', 'Penthouse'),
        ('Studio Apartment', 'Studio Apartment'),
        ('Commercial Office Apartments', 'Commercial Office Apartments'),
        ('Commercial Shop', 'Commercial Shop'),
        ('Commercial Showroom', 'Commercial Showroom'),
        ('Commercial Land', 'Commercial Land'),
        ('Warehouse/Godown', 'Warehouse/Godown'),
        ('Industrial Land', 'Industrial Land'),
        ('Industrial Building', 'Industrial Building'),
        ('Industrial Shed', 'Industrial Shed'),
        ('Agricultural Land', 'Agricultural Land'),
        ('Farmhouse', 'Farmhouse')
    )

    CONSTRUCTION_STATUS = (
        ('Under Construction', 'Under Construction'),
        ('Ready to move', 'Ready to move')
    )
    projectName = models.CharField(max_length=255, verbose_name='Project Name')
    slug = models.SlugField(max_length=255, unique=True)
    propertyAddress = models.CharField(
        max_length=300, default='CREDAI Nagpur Metro Block No.128-A, First Floor, Shriram Shyam Towers, SV Patel Marg, Nagpur, Maharashtra 440001', verbose_name='Property Address')
    propertyPrice = models.DecimalField(
        decimal_places=2, max_digits=20, default=0, verbose_name='Property Price')
    propertyType = models.CharField(
        max_length=255, choices=PROPERTY_TYPES, verbose_name="Property Type")
    projectArea = models.CharField(max_length=255, verbose_name="Project Area")
    propertySize = models.CharField(
        max_length=255, verbose_name="Property Size")
    numberOfUnits = models.PositiveIntegerField(
        default=0, verbose_name="Number Of Units")
    possesion = models.DateField(auto_now=True, verbose_name="Possession Date")
    reraID = models.CharField(
        max_length=12, primary_key=True, verbose_name="Rera ID")
    aboutProject = models.TextField(verbose_name="About This Project")
    propertyBhkConfig = models.CharField(
        max_length=100, default="1,2,3", verbose_name="Configurations of this property(e.g:1,2,3)")
    amenities = models.TextField(verbose_name="Amenities Available")
    builderName = models.CharField(max_length=220, verbose_name="Builder Name")
    builderImage = models.ImageField(
        upload_to='img/property', verbose_name="Builder Image", null=True, blank=True)
    builderAbout = models.TextField(
        default="About the builder.", verbose_name="About the Builder")
    constructionStatus = models.CharField(
        max_length=255, choices=CONSTRUCTION_STATUS, verbose_name="Construction Status of this project")
    is_approved = models.BooleanField(
        default=False, verbose_name="Approve this project for display on the webiste")
    pdqImage = models.ImageField(
        upload_to='img/property', default=None, verbose_name="Property List Image")
    location = models.CharField(max_length=255, default="India")
    locationImage = models.ImageField(
        upload_to='img/property', verbose_name="Location Image", null=True, blank=True)

    def __str__(self):
        return self.projectName


class PropertyConfig(models.Model):
    FLOOR_PLAN = (
        ("1", "1 BHK"),
        ("2", "2 BHK"),
        ("3", "3 BHK"),
        ("4", "4 BHK"),
        ("5", "5 BHK"),
    )

    property = models.ForeignKey(PropertyModel, on_delete=models.CASCADE)
    floorPlan = models.CharField(max_length=3, choices=FLOOR_PLAN)
    areaSqft = models.DecimalField(decimal_places=3, max_digits=20, default=0)
    imagePlan = models.ImageField(upload_to='img/config', default=None)

    class Meta:
        verbose_name = "Property Configuration"
        verbose_name_plural = "Configurations of the properties."

    def __str__(self):
        return self.property.projectName


class PropertyImages(models.Model):
    property = models.ForeignKey(PropertyModel, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='img/property-images', default=None)

    class Meta:
        verbose_name = "Property Image"
        verbose_name_plural = "Property Images"

    def __str__(self):
        return self.property.projectName
