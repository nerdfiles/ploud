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
    showstatus = True
    showmembership = True
    return render_to_response('ui/dashboard.html', { "showmembership": showmembership, "showstatus": showstatus, "body_class": "dashboard" })
    
def reset_password(request):
    return render_to_response('ui/reset_password.html', { "body_class": "reset-password" })
    
def profile(request):
    showstatus = True
    statustype = 'success'
    return render_to_response('ui/profile.html', { "showstatus": showstatus, "statustype": statustype, "body_class": "profile" })
    
def demo(request):
    return render_to_response('ui/demo.html', { "body_class": "demo" })
    
def logout(request):
    return render_to_response('ui/logout.html', { "body_class": "logout" })
    
def login(request):
    showmembership = True
    return render_to_response('ui/dashboard.html', { "showmembership": showmembership, "body_class": "login" })
    
def signup(request):
    showintro = True
    statustype = 'success'
    return render_to_response('ui/home.html', { "showintro": showintro, "statustype": statustype, "body_class": "signup" })
    
def terms_of_service(request):
    return render_to_response('ui/terms_of_service.html', { "body_class": "terms-of-service" })
    
def privacy_policy(request):
    return render_to_response('ui/privacy_policy.html', { "body_class": "privacy-policy" })
    
def membership(request):
    showmembership = True
    return render_to_response('ui/membership.html', { "showmembership": showmembership, "body_class": "membership" })

def free(request):
    return render_to_response('ui/free.html', { "body_class": "membership free" })

def type_1(request):
    return render_to_response('ui/type_1.html', { "body_class": "membership type-1" })

def type_2(request):
    return render_to_response('ui/type_2.html', { "body_class": "membership type-2" })

""" Dashboard UI Functions """    

def view_dashboard_changenameof_site(request):
    return render_to_response('ui/view_dashboard_changenameof_site.html', { "body_class": "dashboard modal-backup change-name-of-site" })

def view_dashboard_remove_site(request):
    return render_to_response('ui/view_dashboard_remove_site.html', { "body_class": "dashboard modal-backup remove-site" })
    
def view_dashboard_transfer_site(request):
    return render_to_response('ui/view_dashboard_transfer_site.html', { "body_class": "dashboard modal-backup transfer-site" })