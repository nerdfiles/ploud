from django.conf.urls.defaults import *
from django.conf import settings
from django.contrib import admin
from django.views.generic.simple import direct_to_template
from os import path

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Base
    url(r'^$', 'ui.views.home'),
    
    # Standard Pages
    url(r'^home/$', 'ui.views.home'),
    url(r'^dashboard/$', 'ui.views.dashboard'),
    url(r'^reset-password/$', 'ui.views.reset_password'),
    url(r'^profile/$', 'ui.views.profile'),
    url(r'^demo/$', 'ui.views.demo'),
    url(r'^logout/$', 'ui.views.home'),
    url(r'^login/$', 'ui.views.dashboard'),
    url(r'^signup/$', 'ui.views.signup'),
    url(r'^terms-of-service/$', 'ui.views.terms_of_service'),
    url(r'^privacy-policy/$', 'ui.views.privacy_policy'),
    
    # Admin Pages
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns.extend(patterns(
        '',
        (r'^_assets/(?P<path>.*)$', 'django.views.static.serve', {'document_root':settings.MEDIA_ROOT}),
))