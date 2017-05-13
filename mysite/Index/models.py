from django.db import models
from django.utils import timezone
from django.conf import settings
import datetime

#print (datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))


# Create your models here.


class ContactUs(models.Model):
	email = models.CharField( max_length=100)
	name = models.CharField( max_length=50)
	comment=models.CharField( max_length=400)
	contact_time = models.DateTimeField(null=True, blank=True)
	def __str__(self):
		return self.name+"-"+str(self.contact_time)
