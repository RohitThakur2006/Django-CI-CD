from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def teachers(request):
    teacher_data = [
            {'id': 1, 
            'name': 'John', 
            'email': 'john@gmail.com'}
         ]
    return HttpResponse(teacher_data)