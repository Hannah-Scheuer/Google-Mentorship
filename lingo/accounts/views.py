from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def perform_create(self, instance):
        instance.save(password=make_password(self.request.data['password']))

