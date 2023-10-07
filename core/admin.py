# Core django imports
from django.contrib import admin

# Local app imports
from core.models.Contact import ContactUsFormModel, ContactBuilder
from core.models.Property import PropertyImages, PropertyConfig, PropertyModel
from core.models.Events import Event, EventImage

# Register your models here.


class PropertyModelAdmin(admin.ModelAdmin):
    list_display = ('projectName', 'builderName', 'reraID')
    list_filter = ('propertyType', 'constructionStatus')
    search_fields = ['title']
    prepopulated_fields = {'slug': ('projectName',)}


class PropertyConfigModelAdmin(admin.ModelAdmin):
    list_display = ('property', 'floorPlan', 'areaSqft')
    list_filter = ('property',)


class ContactFormModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'firm', 'email', 'date', 'phone')
    readonly_fields = ('name', 'firm', 'email', 'date',
                       'phone', 'ii', 'hau', 'message')
    list_filter = ('date',)
    search_fields = ['firm']


class EventImageAdmin(admin.StackedInline):
    model = EventImage


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    inlines = [EventImageAdmin]

    class Meta:
        model = Event


class EventImageAdmin(admin.ModelAdmin):
    pass


admin.site.register(PropertyImages)
admin.site.register(ContactBuilder)
admin.site.register(PropertyConfig, PropertyConfigModelAdmin)
admin.site.register(ContactUsFormModel, ContactFormModelAdmin)
admin.site.register(PropertyModel, PropertyModelAdmin)
