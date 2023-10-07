# Core django imports
from django.urls import path
from django.contrib import admin

# Local app imports
from .views import (IndexView, AboutView, ContactUsView, GovernmentRulesView, OurVendorsView,
                    OfficeBearersView, CodeOfConductView, PropertyListView, PropertyDetailsView, RecentEvents, ContactUsApiView)

admin.site.site_header = "Credai Admin"
admin.site.site_title = "Credai Admin Portal"
admin.site.index_title = "Welcome to the Credai Admin Portal"

app_name = "core"
urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('about/', AboutView.as_view(), name='about'),
    path('contact-us/', ContactUsView.as_view(), name='contact-us'),
    path('recent-events/', RecentEvents, name='recent-events'),
    path('our-vendors/', OurVendorsView.as_view(), name='our-vendors'),
    path('government-rules/', GovernmentRulesView.as_view(),
         name='government-rules'),
    path('office-bearers/', OfficeBearersView.as_view(), name='office-bearers'),
    path('code-of-conduct/', CodeOfConductView.as_view(), name="code-of-conduct"),
    path('property-list/', PropertyListView.as_view(), name='property-list'),
    path('property-detail/<slug:slug>/',
         PropertyDetailsView, name='property-detail'),
    path('api/contact', ContactUsApiView.as_view())
]
