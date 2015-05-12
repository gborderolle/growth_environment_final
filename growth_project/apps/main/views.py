from django.shortcuts import render, render_to_response, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from growth_project.apps.main.models import *
from django.views import generic
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST
from django.template import RequestContext
from django.template import Context
from django.template.loader import get_template
from growth_project.apps.main.models import Template as templates
import mysql.connector


def index(request):
    return render_to_response('default.php', RequestContext(request))


def dashboard(request):
    return render_to_response('dashboard.html', {'user': request.user})


def selector(request):
    try:
        # inventory_data = inventory.objets.get(hostname=hostname)
        templates_data = templates.objects.all()
        return render(request, 'selector_landing.html',
                      {'user': request.user, 'templates': templates_data})
    except templates.DoesNotExist:
        return render(request, 'selector_landing.html',
                      {'user': request.user, 'error_message': "No hay templates ingresados"})
        # return HttpResponseRedirect('/accounts/invalid_login'


def section_construction(request):
        return render_to_response('section_construction.html')


"""
conn = mysql.connector.connect(user='root', database='growthdb')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM main_template")
    rows = cursor.fetchall()
    t = Context({'results': rows})

    return render_to_response('selector_landing.html', t)
    """


# def designer(request, template_name):
def designer(request, template_id):
    # tag = Tag.objects.get(name=unslug)
    # return render_to_response('landing.html', args=(templateFileName,))
    return render_to_response('theme_pages/landing_' + template_id + '.html',
                              {'user': request.user, 'template_id': template_id})
    # {'user': request.user, 'template_id': template_id,'template_name': template_name})


def save_template(request, template_name):
    if request.method == 'POST':
        template_id = request.POST.get('template_id', '')

        t = get_object_or_404(Template, pk=template_id)
        try:
            lp = LandingPage()
            lp.template_id = t.id
            lp.userEmail = 'prueba'

            LandingPage.objects.create(template_id=t.id, userEmail='asdsad')

        except (KeyError, Template.DoesNotExist):
            # return render(request, 'theme_pages/' + template_name + '.html', {'user': request.user,
            # 'error_message': "El template no existe en la base.",
            return render_to_response('dashboard.html', {'user': request.user})

        # })
    return render_to_response('dashboard.html', {'user': request.user})
