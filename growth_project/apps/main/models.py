from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class TimeStampModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Template(models.Model):
    templateName = models.CharField(max_length=100)
    templateFileName = models.CharField(max_length=100)
    templateDescription = models.CharField(max_length=100)
    previewImagePath = models.CharField(max_length=200)

    def __unicode__(self):
        return self.templateName


class LandingPage(TimeStampModel):
    userEmail = models.CharField(max_length=100) #FK User
    template = models.ForeignKey(Template)

    def __unicode__(self):
        return self.userEmail + "_" + self.template.templateName


class LandinPageFields(models.Model):
    landingPage = models.ForeignKey(LandingPage)
    fieldName = models.CharField(max_length=100)

    def __unicode__(self):
        return self.landingPage + "_" + self.fieldName


class Plan(models.Model):
    planName = models.CharField(max_length=100)
    planDescription = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    duration = models.FloatField(default=0)
    toolCount = models.IntegerField(default=0)

    def __unicode__(self):
        return self.planName


class Tool(models.Model):
    toolName = models.CharField(max_length=100)
    toolDescription = models.CharField(max_length=100)

    def __unicode__(self):
        return self.toolName


class UserTools(models.Model):
    tool = models.ForeignKey(Tool)
    userEmail = models.CharField(max_length=100) #FK User

    def __unicode__(self):
        return self.userEmail + " " + self.tool.toolName


'''
class User(AbstractUser):
    bornDate = models.DateField()
    plan = models.ForeignKey(Plan)
    banned = models.BooleanField(default=0)
'''