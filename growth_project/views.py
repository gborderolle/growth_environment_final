from django.shortcuts import render, render_to_response, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth
from django.core.context_processors import csrf
from growth_project.apps.users.models import User as User1
from growth_project.apps.main.models import LandingPage as landingPage


def login(request):
    c = {}
    c.update(csrf(request))
    return render_to_response('landing_mvp.html', c)


def auth_view(request):
    email = request.POST.get('login_email', '')
    password = request.POST.get('login_password', '')
    user = auth.authenticate(username=email, password=password)

    if user is not None:
        auth.login(request, user)
        try:
            landingPage.objects.get(userEmail=email)
            return HttpResponseRedirect('/dashboard')

        except landingPage.DoesNotExist:
            return HttpResponseRedirect('/dashboard/selector')

    else:
        return HttpResponseRedirect('/accounts/invalid_login')


def loggedin(request):
    # response = HttpResponse(template.render(context))
    # response.set_cookie('user_logged', request.user)
    return render_to_response('loggedin.html', {'user': request.user})


def invalid_login(request):
    return render_to_response('invalid_login.html')


def logout(request):
    auth.logout(request)
    return render_to_response('logout.html')


def new(request):
    firstname = request.POST.get('signup_firstname', '')
    lastname = request.POST.get('signup_lastname', '')
    email = request.POST.get('signup_email', '')
    password = request.POST.get('signup_password', '')

    user = User1.objects.create_user(email, email, password)
    user.first_name = firstname
    user.last_name = lastname
    user.save()

    if user is not None:
        return render_to_response('user_created.html', {'user': request.user})
    else:
        return render_to_response('/accounts/invalid_login')


