from django.db import models

# Create your models here.
class User(models.Model):
    userName = models.CharField(max_length=30)   
    email = models.CharField(max_length=30)  
    password = models.CharField(max_length=30)  

class Place(models.Model):
    placeName = models.CharField(max_length=30)  
    description = models.CharField(max_length=300)
    placeImageUrl = models.CharField(max_length=30) 

class Trip(models.Model):
    tripDate = models.DateField(null=True)
    user     = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
    place    = models.ForeignKey(User, on_delete=models.CASCADE, related_name='places')

    
    
# ###########
# status      = models.BooleanField()  # open / closed
# createOn    = models.DateField(null=True)
# user        = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')