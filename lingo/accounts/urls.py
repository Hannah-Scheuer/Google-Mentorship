from django.urls import path
from .views import UserView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register/', UserView.as_view()),
    path('login/', obtain_auth_token, name='auth_token'),
]
