# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
from django.template.defaultfilters import slugify
from django.shortcuts import render_to_response, get_list_or_404, get_object_or_404
from django.http import HttpResponseRedirect
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings

def index(request):
    return render_to_response('ui/index.html')

def home(request):
    return render_to_response('ui/home.html')
    
def dashboard(request):
    return render_to_response('ui/dashboard.html')
    
def reset_password(request):
    return render_to_response('ui/reset_password.html')
    
def profile(request):
    return render_to_response('ui/profile.html')