from rest_framework import serializers    
from .models import User, Place, Trip  
     
class UserSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = User    
        fields = ['id', 'userName', 'email', 'password']

class PlaceSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Place   
        fields = ['id', 'placeName','description']

class TripSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Trip   
        fields = ['id', 'tripDate', 'user', 'place']


