from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets    
from .serializers import UserSerializer, PlaceSerializer, TripSerializer  
from .models import User, Place, Trip         
                                                                    
    
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