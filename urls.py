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
    
    # Admin Pages
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns.extend(patterns(
        '',
        (r'^_assets/(?P<path>.*)$', 'django.views.static.serve', {'document_root':settings.MEDIA_ROOT}),
))