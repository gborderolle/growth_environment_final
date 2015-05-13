from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.
class UserAdmin(UserAdmin):
    fieldsets = (
        ('User',
         {'fields': ('username', 'password')}),
        ('Persona Info',
         {'fields': ('first_name', 'last_name', 'email', 'avatar')}),
        ('PermissionsInfo',
         {'fields': ('is_active', 'is_staff', 'is_superuser', 'email', 'groups', 'user_permissions')}),
    )

admin.site.register(User, UserAdmin)
#admin.site.register(User)
