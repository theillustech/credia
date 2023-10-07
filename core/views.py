# Core Django imports
from django.core.mail import send_mail
from django.db.models import Max, Min
from django.shortcuts import render, get_object_or_404
from django.views import generic

# Third party library imports
from rest_framework import generics
from rest_framework import permissions

# Local app imports
from .forms import ContactUsForm
from core.models.Property import PropertyModel, PropertyConfig, PropertyImages
from core.models.Contact import Contact, ContactBuilder, ContactUsFormModel
from core.models.Events import Event, EventImage
from .serializers import ContactUsSerializer

# Create your views here.


class IndexView(generic.TemplateView):
    template_name = "index.html"


class AboutView(generic.CreateView):
    def get(self, request, *args, **kwargs):
        form = ContactUsForm()
        return render(request, "about.html")

    def post(self, request, *args, **kwargs):
        form = ContactUsForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, "about.html", {'form': form})


class PropertyListView(generic.ListView):
    queryset = PropertyModel.objects.filter(is_approved=True)
    template_name = 'properties.html'
    context_object_name = 'properties'
    # extra_context = queryset.aggregate(
    #     max=Max('propertyPrice'), min=Min('propertyPrice'))


def PropertyDetailsView(request, slug):
    context = {
        "property": PropertyModel.objects.get(slug=slug),
        "images": None,
        "amenities": None,
        "floorPlan": None,
    }
    context["images"] = PropertyImages.objects.filter(
        property=context["property"])
    context['amenities'] = context["property"].amenities.split("-")
    array = []
    for x in range(1, 6):
        x = str(x)
        propertyConfig = PropertyConfig.objects.filter(
            property=context["property"], floorPlan=x)
        if propertyConfig:
            container = [x]
            container.append(propertyConfig)
            array.append(container)
    context["floorPlan"] = array
    if request.method == "POST":
        projectname = request.POST.get("projectname")
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        msg = request.POST.get("msg")
        floorPlan = request.POST.getlist("floorPlan")
        clientkey = request.Post["g-recaptcha-response"]
        secretkey = "6Ldmh1McAAAAAMpFlqQ57nKTGTInMdiRfhvFvYef"
        captchaData = {
            'secret': secretkey,
            'response': clientkey
        }
        ContactBuilder.objects.create(
            projectname=projectname ,name=name, email=email, phone=phone, msg=msg, floorPlan=floorPlan)
    return render(request, "individual.html", context)


def RecentEvents(request):
    event = Event.objects.all()
    photos = EventImage.objects.all()
    return render(request, 'recentEvents.html', {
        'events': event,
        'photos': photos
    })


class GovernmentRulesView(generic.TemplateView):
    template_name = "governmentRules.html"


class OurVendorsView(generic.TemplateView):
    template_name = "ourVendors.html"


class OfficeBearersView(generic.TemplateView):
    template_name = "officeBearers.html"


class CodeOfConductView(generic.TemplateView):
    template_name = "codeOfConduct.html"


class ContactUsView(generic.CreateView):
    def get(self, request, *args, **kwargs):
        form = ContactUsForm()
        return render(request, "contact.html")

    def post(self, request, *args, **kwargs):
        form = ContactUsForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, "contact.html", {'form': form})


def enquiry(request, propId):
    if request.method == 'POST':
        name = request.POST.get('name', None)
        surname = request.POST.get('surname', None)
        email = request.POST.get('email', None)
        subject = request.POST.get('subject', None)
        message = request.POST.get('message', None)
        Contact.objects.create(name=name, surname=surname,
                               email=email, sub=subject, msg=message)
    if request.method == 'POST' and email and name:
        p = PropertyModel.objects.get(reraID=propId)
        send_mail('You have received an enquiry', name + surname + email + message,
                  '123shreyastejam@gmail.com', [p.builderName.user.email], fail_silently=False)
    return render(request, "enquiry.html")


class ContactUsApiView(generics.ListAPIView):
    queryset = ContactUsFormModel.objects.order_by('-date')
    serializer_class = ContactUsSerializer
    permission_classes = (permissions.AllowAny,)
