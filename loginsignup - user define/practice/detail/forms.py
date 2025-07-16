from django import forms
# from loginsignup.models import AddGame1
from detail.models import Student
class StudForm(forms.ModelForm):
    class Meta:
        model=Student
        fields=["name","age"]