__author__ = 'Gborde'

import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

SECRET_KEY = 'w8*hk+yyt!)@tkl((^$c0g&#(7da8#%!6v7f-x@b^u)09hztv*'

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'growth_project.apps.main',
    'growth_project.apps.users',
)

LOCAL_APPS = {
    'growth_project.apps.main',
}

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'growth_project.urls'

WSGI_APPLICATION = 'growth_project.wsgi.application'

LANGUAGE_CODE = 'es-ES'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

import os

ROOT_PATH = os.path.dirname(__file__)

STATIC_ROOT = ''

STATIC_URL = '/static/'

#STATICFILES_DIRS = [os.path.join(ROOT_PATH, 'static')]

STATICFILES_DIRS = (
    ('assets', 'C:/Django/env/growth_project/growth_project/apps/main/static'),
)