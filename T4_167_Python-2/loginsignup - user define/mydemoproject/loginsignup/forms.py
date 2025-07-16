from django import forms
# from loginsignup.models import AddGame1
from loginsignup.models import Student
# class Gameform(forms.ModelForm):
#     class Meta:
#         model=AddGame1
#         fields=["name","type_name","review","download","image"]
class StudForm(forms.ModelForm):
    class Meta:
        model=Student
        fields=["name","age","marks"]