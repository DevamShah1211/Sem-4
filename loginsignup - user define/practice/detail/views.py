# myapp/views.py

from django.shortcuts import render, redirect,get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
# from loginsignup.models import Addstud1
# from loginsignup.forms import studform
from detail.models import Student
from detail.forms import StudForm

def home(request):
    return render(request, 'home.html')


def base(request):
    return render(request,"base.html")


def show(request):
    try:
        query=request.GET["q"]
        print(query)
        if query:
            stud=Student.objects.filter(name__icontains=query)
        else:
            stud=Student.objects.all()
    except:
         stud=Student.objects.all()
    return render(request,"show.html",{"stud":stud})


def delete(request,id):
     stud=get_object_or_404(Student,id=id)
     stud.delete()
     return redirect("show")

def details(request,id):
    stud=get_object_or_404(Student,id=id)
    try:
        q1=int(request.GET["no1"])
        q2=int(request.GET["no2"])
        q=q1+q2
        if q:
            return render(request,"details.html",{"q":q,"q1":q1,"q2":q2,"stud":stud})
        else:
            stud=get_object_or_404(Student,id=id)
    except:
        stud=get_object_or_404(Student,id=id)
    return render(request,"details.html",{"stud":stud})

# def details(request,id):
#     stud=get_object_or_404(Student,id=id)
#     try:
#         q=request.GET["no"]
#         if q:
#             return render(request,"details.html",{"q":q,"stud":stud})
#         else:
#             stud=get_object_or_404(Student,id=id)
#     except:
#         stud=get_object_or_404(Student,id=id)
#     return render(request,"details.html",{"stud":stud})