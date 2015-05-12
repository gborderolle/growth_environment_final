from django.conf.urls import patterns, include, url
from django.contrib import admin
from growth_project.apps.main import views as views_growth

admin.autodiscover()

urlpatterns = patterns('',
                       url(r'', include('growth_project.apps.main.urls', namespace="main")),
                       url(r'', include('growth_project.apps.users.urls', namespace="users")),

                       # Social auth urls
                       url(r'', include('social.apps.django_app.urls', namespace="social")),
                       url(r'', include('django.contrib.auth.urls', namespace="auth")),

                       # User auth urls
                       url(r'^accounts/login/$', 'growth_project.views.login'),
                       url(r'^accounts/auth/$', 'growth_project.views.auth_view'),
                       url(r'^accounts/logout/$', 'growth_project.views.logout'),
                       url(r'^accounts/loggedin/$', 'growth_project.views.loggedin'),
                       url(r'^accounts/invalid_login/$', 'growth_project.views.invalid_login'),
                       url(r'^accounts/new/$', 'growth_project.views.new'),

                       # Main functions
                       url(r'^dashboard/$', views_growth.dashboard, name='dashboard'),
                       url(r'^dashboard/selector/$', views_growth.selector, name='selector'),
                       # url(r'^dashboard/designer/$', views_growth.designer, name='designer'),
                       # url(r'^dashboard/designer/(\d{4})/$', views_growth.designer, name='designer'),
                       url(r'^dashboard/section_construction/$', views_growth.section_construction, name='section_construction'),


                       #url(r'^designer/(?P<template_name>\w+)/$', views_growth.designer, name='designer'),
                       url(r'^designer/landing_(\d{1})/$', views_growth.designer, name='designer'),
                       # (?P<name>\w+)/

                       url(r'^dashboard/$', views_growth.save_template, name='save_template'),


                       # Reset password urls
                       url(r'^reset/password_reset/$', 'django.contrib.auth.views.password_reset',
                           name='reset_password_reset1'),
                       url(r'^reset/password_reset/done/$', 'django.contrib.auth.views.password_reset_done',
                           name='password_reset_done'),
                       url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>.+)/$',
                           'django.contrib.auth.views.password_reset_confirm', name='password_reset_confirm'),
                       url(r'^reset/done/$', 'django.contrib.auth.views.password_reset_complete',
                           name='password_reset_complete'),


                       # Admin urls
                       url(r'^admin/', include(admin.site.urls)),

)
# ADMIN> gborde 154060gb - 123456
