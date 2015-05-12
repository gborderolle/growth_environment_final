import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

SECRET_KEY = 'w8*hk+yyt!)@tkl((^$c0g&#(7da8#%!6v7f-x@b^u)09hztv*'

TEMPLATE_DIRS = (
    "C:/Django/env/growth_project/growth_project/templates",
    # "C:/Django/env/growth_project/growth_project/apps/main/templates",
)

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'social.apps.django_app.default',
    # My apps
    'growth_project.apps.main',
    'growth_project.apps.users',
)

LOCAL_APPS = {
    'growth_project.apps.main',
    'growth_project.apps.users',
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

STATICFILES_DIRS = (
    ('assets', 'C:/Django/env/growth_project/growth_project/static'),
    # ('assets', 'C:/Django/env/growth_project/growth_project/apps/main/static'),
)

# Database -------------------------------------------------------------------------------

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'growthdb',
        'USER': 'root',
        'PASSWORD': '',
    }
}


# Templates -------------------------------------------------------------------------------

TEMPLATE_DEBUG = True

TEMPLATE_DIRS = (
    'C:/Django/env/growth_project/growth_project/templates',
    # 'C:/Django/env/growth_project/growth_project/apps/main/templates',
    'C:/Django/env/growth_project/growth_project/apps/users/templates',
)

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

# Authentication -------------------------------------------------------------------------------

THIRD_PARTY_APPS = (
    'social.apps.django_app.default',
)

AUTH_USER_MODEL = 'users.User'
# AUTH_USER_MODEL = 'main.User'

AUTHENTICATION_BACKENDS = (
    'social.backends.facebook.Facebook2AppOAuth2',
    'social.backends.facebook.FacebookOAuth2',
    'social.backends.twitter.TwitterOAuth',
    'social_auth.backends.google.GoogleOAuth2Backend',
    'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '944967524382-4l1dmkc3j7v0km0e6n6lghbahv9gkc2q.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'q4C3fwATL-Bo_oUujpFDwmg6'

SOCIAL_AUTH_FACEBOOK_KEY = '766146603463679'
SOCIAL_AUTH_FACEBOOK_SECRET = '8bf5c7d42cd2a3bf26c8cd4635e68135'

SOCIAL_AUTH_TWITTER_KEY = 'XIjx3QTxBR6US7mSn0EjOsyGL'
SOCIAL_AUTH_TWITTER_SECRET = 'puFVAD9aPeIkSTRZzvD9wwnkjMcEa2GyTRdY5KK5xJT5MCoU9q'

SOCIAL_AUTH_LOGIN_REDIRECT_URL = '/'

SOCIAL_AUTH_LOGIN_URL = '/error/'
SOCIAL_AUTH_USER_MODEL = 'users.User'

SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']

# Reset password -------------------------------------------------------------------------------

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 25  # 587
EMAIL_HOST_USER = 'gonzalo@growthsquare.com'
EMAIL_HOST_PASSWORD = 'gborderolle12a'
DEFAULT_FROM_EMAIL = 'gonzalo@growthsquare.com'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'


