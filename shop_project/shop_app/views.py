from django.shortcuts import render
from .models import *
import random
from .otp import*
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.hashers import check_password,make_password
from django.http import JsonResponse
# Create your views here.


def home(request):
    productlider = Products.objects.filter(product_status="Publish")
    slidermn = Sliders.objects.all()
 
    ############# this is login  form ##############
    login_f1_otp=random.randint(0,1000000)

    if request.method=="GET":
        conter=0
        login_np_f1=request.GET.get("number_login_f1")
        otp_f1=request.GET.get("otp_f1") 
        print(login_np_f1)
        cheking_user_exist=Customeruser.objects.filter(username=login_np_f1)
        print(cheking_user_exist)
        if cheking_user_exist:
            print(login_f1_otp)
            return render(request,"home.html") 
        elif len(cheking_user_exist) !=conter:
                con+=1
        else:
            usernotfound1="no_any_user"
            print(usernotfound1)
            JsonResponse({"not_found":usernotfound1})
   
       

            
            # JsonResponse(usernotfound1)


        # for a in cheking_user_exist:
        #     if login_np_f1==a.username:
        #         print("this is python otp",login_f1_otp)
        #         if otp_f1==login_f1_otp:
        #             print("its login done thenx for try here")
        #             login(request)
        #             return render(request,"home.html")
        #         break

        #     else:
        #         con=0
        #         if len(cheking_user_exist) !=con:
        #             con +=1
        #         else:
        #             usernotfound1="noanyeser11"
        #             print(usernotfound1)
        #             # JsonResponse(usernotfound1)
                         
    ############# thi is sing up form ##############
    if request.method =='POST':
        num = request.POST.get('num')
        otp1 = request.POST.get('input_otp') 
        Customeruser(username=num,password=otp1).save()
        return render(request,"home.html")
      

    data = { 
        'slider_home': slidermn,
        'product_slider': productlider,
        "user_notfound":usernotfound1
    }
    return render(request, "home.html", data)
 


def check(request):
    pass
    # if request.session.has_key('phone'):
    #     phone=request.session["phone"]
    #     v1=User.objects.get(username=phone)
    #     # print(v1)
        
    #     return render(request,"home.html",{"v":v1})
        
    
    

def mobilestor(request):
    main_cat=Mian_Catogory.objects.all()
 
    data = {
        'catt':main_cat
    }
    return render(request, 'mobile-phones-store.html', data)

def pro(request):

    main_cat=Mian_Catogory.objects.all()

    ct = request.GET.get("probrand")
    if ct:
        prd=Products.objects.filter(Sub_catogory=ct)
    else:
        prd=Products.objects.filter(product_status="Publish")
    
   
    data = { 
        'prod':prd,    
        'catt':main_cat,

    }
    return render(request,"mobilse.html",data)

def salle(request,pk):
    main_cat=Mian_Catogory.objects.all()
    sl_fpro=Products.objects.get(id=pk)
    pd=Imagess.objects.filter(product=pk)
 
    return render(request,"saleout.html",context={"sale_product":sl_fpro,'catt':main_cat,"promg":pd})



def checkout(request):
    return render(request,"checkeout.html")