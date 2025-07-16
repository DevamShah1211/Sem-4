# myapp/views.py

from django.shortcuts import render, redirect,get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
# from loginsignup.models import AddGame1
# from loginsignup.forms import Gameform
from loginsignup.models import Student
from loginsignup.forms import StudForm
def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email    = request.POST['email']
        password = request.POST['password']
        confirm  = request.POST['confirm']

        if password != confirm:
            messages.error(request, "Passwords do not match.")
            return redirect('signup')

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
            return redirect('signup')

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        messages.success(request, "Account created successfully.")
        return redirect('login')

    return render(request, 'signup.html')


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('navbar')
        else:
            messages.error(request, "Invalid credentials.")
            return redirect('login')

    return render(request, 'login.html')


def logout_view(request):
    logout(request)
    return redirect('login')


@login_required
def home(request):
    return render(request, 'home.html')


def navbar(request):
    return render(request,"navbar.html")


# def show(request):
#     try:
#         query=request.GET["q"]
#         print(query)
#         if query:
#             game=AddGame1.objects.filter(name__icontains=query)
#         else:
#             game=AddGame1.objects.all()
#     except:
#          game=AddGame1.objects.all()
#     return render(request,"show.html",{"game":game})

def show(request):
    try:
        query=request.GET["q"]
        print(query)
        if query:
            game=Student.objects.filter(name__icontains=query)
        else:
            game=Student.objects.all()
    except:
         game=Student.objects.all()
    return render(request,"show.html",{"game":game})

# def edit(request,id):

#     game=get_object_or_404(AddGame1,id=id)
#     if request.method=="POST":
#         form=Gameform(request.POST,request.FILES,instance=game)
#         if form.is_valid():
#             form.save()
#             return redirect("show")
#     else:
#         form=Gameform(instance=game)

#     return render(request,"edit.html",{"form":form})


# def add(request):
#     if request.method=="POST":
#         form=Gameform(request.POST,request.FILES)
#         if form.is_valid():
#             form.save()
#             return redirect("show")
        
#     else:
#         form=Gameform()

#     return render(request,"add.html",{"form":form})


# def delete(request,id):
#      game=get_object_or_404(AddGame1,id=id)
#      game.delete()
#      return redirect("show")
def delete(request,id):
     game=get_object_or_404(Student,id=id)
     game.delete()
     return redirect("show")

# def details(request,id):
#     game=get_object_or_404(AddGame1,id=id)
#     try:
#         q=request.GET["no"]
#         if q:
#             return render(request,"details.html",{"q":q,"game":game})
#         else:
#             game=get_object_or_404(AddGame1,id=id)
#     except:
#         game=get_object_or_404(AddGame1,id=id)
#     return render(request,"details.html",{"game":game})

def details(request,id):
    game=get_object_or_404(Student,id=id)
    try:
        q=request.GET["no"]
        if q:
            return render(request,"details.html",{"q":q,"game":game})
        else:
            game=get_object_or_404(Student,id=id)
    except:
        game=get_object_or_404(Student,id=id)
    return render(request,"details.html",{"game":game})