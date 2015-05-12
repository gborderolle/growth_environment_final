from django.conf.urls import patterns, include, url
from django.contrib import admin
from growth_project.apps.users import views

urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),
)
