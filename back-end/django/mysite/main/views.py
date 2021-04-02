from django.shortcuts import render
from django.http import HttpResponse
from .models import ToDoList, Item

# Create your views here.
def index(response, id):
    todo_list = ToDoList.objects.get(id=id)
    return render(response, "main/list.html", {"item_list": todo_list})


def home(response):
    return render(response, "main/home.html", {"name": "test"})
