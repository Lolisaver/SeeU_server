from django.conf.urls import url
from django.contrib import admin
from . import views
#from . import views #從同資料夾引用views
app_name='Index'

urlpatterns = [
	#default home page
    url(r'^$', views.home, name='home' ),  
    url(r'^test/$', views.test, name='test' ),  
]