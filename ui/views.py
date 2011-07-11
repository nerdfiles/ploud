# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
from django.template.defaultfilters import slugify
from django.shortcuts import render_to_response, get_list_or_404, get_object_or_404
from django.http import HttpResponseRedirect
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings

def index(request):
    showintro = True
    return render_to_response('ui/index.html', { "showintro": showintro, "body_class": "home" })

def home(request):
    showintro = True
    return render_to_response('ui/home.html', { "showintro": showintro, "body_class": "home" })
    
def dashboard(request):
    return render_to_response('ui/dashboard.html', { "body_class": "dashboard" })
    
def reset_password(request):
    return render_to_response('ui/reset_password.html', { "body_class": "reset-password" })
    
def profile(request):
    return render_to_response('ui/profile.html', { "body_class": "profile" })
    
def demo(request):
    return render_to_response('ui/demo.html', { "body_class": "demo" })