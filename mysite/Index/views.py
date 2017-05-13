from django.shortcuts import render,get_object_or_404,redirect
from django.http import HttpResponse
from . import models,forms
from .forms import SignUp,ContactUsForm,UserForm
import datetime
#from django.utils import timezone
from django.conf import settings
from django.core.mail import send_mail

        

    


# Create your views here.
#app_name='Index'
#def home(request):
#	return render(request, 'Index/home.html')
print(datetime.datetime.now())
def home(request):
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ContactUsForm(request.POST)
        # check whether it's valid:
        contact_status="success"


        if form.is_valid():
            ContactMessage=models.ContactUs.objects.create()
            ContactMessage.contact_time=datetime.datetime.now()
            ContactMessage.name=form.cleaned_data['name']
            ContactMessage.email=form.cleaned_data['email']
            ContactMessage.comment=form.cleaned_data['comment']
            ContactMessage.save();
        
            send_mail(
            "SeeU-contactus:"+ContactMessage.name,
            "email:"+ContactMessage.email+",comment:"+ContactMessage.comment,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_HOST_USER],
            fail_silently=True
            )
            
            return render(request,'Index/Index.html', {'status': contact_status,},)

    else:
        form = ContactUsForm()
    return render(request, 'Index/Index.html')

def test(request):
	time1 = timezone.now()
	time2 = datetime.datetime.now()
	return render(request, 'Account/test1.html',{'time1': time1,'time2':time2})