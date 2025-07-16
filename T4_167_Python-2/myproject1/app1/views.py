from django.shortcuts import render,HttpResponse

# Create your views here.
def start(request):
    return HttpResponse("Hello, world. You're at the add page.")
def display(request):
    return render(request,"1.html")
def shop(request):
    return render(request,"shop.html")
def list(request):
    name="Devam"
    age=20
    marks=[16,20,22.5,19,25]
    sname=["DM","TOC","COA","Python-2","FSD-2"]
    data={"name":name,"age":age,"marks":marks,"sname":sname}
    return render(request,"2.html",data)
def contact(request):
    return render(request,"contact.html")
def home(request):
    return render(request,"home.html")
def navbar(request):
    return render(request,"navbar.html")
def service(request):
    return render(request,"service.html")
def about(request):
    return render(request,"about.html")