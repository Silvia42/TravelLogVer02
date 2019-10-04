from rest_framework import serializers    
from .models import User, Place, Trip  
     
class UserSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = User    
        fields = ['id', 'userName', 'email', 'password']

class IssueSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Place   
        fields = ['id', 'placeName','description', 'placeImageUrl']

class IssueSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Trip   
        fields = ['id', 'tripDate', 'user', 'place']


