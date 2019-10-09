from django.urls import include, path                    
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'place', views.PlaceViewSet)
router.register(r'trip', views.TripViewSet)



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # path('userbyname/<username>', )
    path("login", views.get_user),
    # path("username/", views.get_userbyname),
    path("username/<str:name>/", views.get_userbyname),
    path('', include(router.urls)),
]