from django.shortcuts import render

# Crfrom django.http import HttpResponse
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
