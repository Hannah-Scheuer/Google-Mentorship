from django.urls import path
from .views import GetUserView, CreateUserView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('', GetUserView.as_view()),
    path('register/', CreateUserView.as_view()),
    path('login/', obtain_auth_token, name='auth_token'),
]
