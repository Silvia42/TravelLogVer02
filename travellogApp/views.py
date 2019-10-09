from django.shortcuts import render
from rest_framework.renderers import JSONRenderer

# Create your views here.

from rest_framework import viewsets    
from .serializers import UserSerializer, PlaceSerializer, TripSerializer  
from .models import User, Place, Trip   
import datetime
from django.http import HttpResponse 

from rest_framework.decorators import action

def get_user(request, pk=None):
    #queryset = User.objects.all()
    #serializer = UserSerializer(data=request.data)
    print('This is login request')
    # print('GET: ' , HttpRequest.GET)
    # print('body: ', HttpRequest.body)
    # if serializer.is_valid():
    #     return self.get_response(queryset)
    # else:
    #     return Response(serializer.errors,
    #                     status=status.HTTP_400_BAD_REQUEST)
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)    

def get_userbyname(request, name):
    #b=request.path
    #queryset = User.objects.filter(userName='aaa')
    # JSONRenderer().render
    queryset = User.objects.filter(userName=name)
    json = JSONRenderer().render(UserSerializer(queryset, many=True).data)
    #serializer = UserSerializer(data=request.data)
    print(f'I am looking for user by username {name}')
    print(f'I found {json}')

    return HttpResponse(json)                                                            
    
class UserViewSet(viewsets.ModelViewSet):    
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = User.objects.all()    
    serializer_class = UserSerializer

    # @action(detail=True)
    # def modules(self, request, pk=None):

    #     user = self.get_object()
    #     user_modules = User.objects.filter(user.userName=user)
    #     serializer = ModuleSerializer(user_modules, many=True)
    #     return Response(serializer.data)

    

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