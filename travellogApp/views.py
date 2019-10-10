from django.shortcuts import render
from rest_framework.renderers import JSONRenderer

# Create your views here.

from rest_framework import viewsets    
from .serializers import UserSerializer, PlaceSerializer, TripSerializer  
from .models import User, Place, Trip   
import datetime
from django.http import HttpResponse 

from rest_framework.decorators import action

# path("login", views.get_user),
def get_user(request, pk=None):
    # print('This is login request')
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)    

# path("username/<str:name>/", views.get_userbyname),
def get_userbyname(request, name):
    #b=request.path
    #queryset = User.objects.filter(userName='aaa')
    # JSONRenderer().render
    queryset = User.objects.filter(userName=name)
    json = JSONRenderer().render(UserSerializer(queryset, many=True).data)
    #serializer = UserSerializer(data=request.data)
    # print(f'I am looking for user by username {name}')
    # print(f'I found {json}')

    return HttpResponse(json)     


# path("tripbyuserid/<int:userid>/", views.get_tripbyuserid),  
def get_tripbyuserid(request, userid):
    queryset = Trip.objects.filter(user=userid)
    json = JSONRenderer().render(TripSerializer(queryset, many=True).data)
    # # serializer = UserSerializer(data=request.data)
    # print(f'I am looking for trips for user with id {userid}')
    # print(f'I found {json}')

    return HttpResponse(json)  
    # return HttpResponse("<html><body>asdf</body></html>")      

    
class UserViewSet(viewsets.ModelViewSet):    
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = User.objects.all()    
    serializer_class = UserSerializer    

class PlaceViewSet(viewsets.ModelViewSet):    
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Place.objects.all()    
    serializer_class = PlaceSerializer    

class TripViewSet(viewsets.ModelViewSet):    
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Trip.objects.all()    
    serializer_class = TripSerializer   