from django import forms #for website
from django.contrib.auth.models import User
from django.contrib.auth.validators import ASCIIUsernameValidator
from .models import ContactUs
# Create your models here.

class UserForm(forms.ModelForm):
	password=forms.CharField(widget=forms.PasswordInput)
	class Meta:
		model=User
		fields=['username','email','password']
        #proxy = True  

class ContactUsForm(forms.ModelForm):

	class Meta:
		model=ContactUs
		fields=['name','email','comment','contact_time']
		
class SignUp (forms.Form):
	email = forms.CharField(label='email', max_length=100)
	PW = forms.CharField(label='PW', max_length=100)
	Name=forms.CharField(label='Name', max_length=100)