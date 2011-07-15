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
    url(r'^logout/$', 'ui.views.home'),
    url(r'^login/$', 'ui.views.login'),
    url(r'^signup/$', 'ui.views.signup'),
    url(r'^terms-of-service/$', 'ui.views.terms_of_service'),
    url(r'^privacy-policy/$', 'ui.views.privacy_policy'),
    url(r'^membership/$', 'ui.views.membership'),
    url(r'^membership/free/$', 'ui.views.free'),
    url(r'^membership/type-1/$', 'ui.views.type_1'),
    url(r'^membership/type-2/$', 'ui.views.type_2'),
    
    # Subpages
    
    # State Demo Pages
    
    # Modal Backup Pages
    url(r'^profile/$', 'ui.views.profile'),
    url(r'^change-name-1/$', 'ui.views.view_dashboard_changenameof_site'),
    url(r'^remove-1/$', 'ui.views.view_dashboard_remove_site'),
    url(r'^transfer-1/$', 'ui.views.view_dashboard_transfer_site'),
    
    # Admin Pages
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^demo/$', 'ui.views.demo'),
)

urlpatterns.extend(patterns(
        '',
        (r'^_assets/(?P<path>.*)$', 'django.views.static.serve', {'document_root':settings.MEDIA_ROOT}),
))