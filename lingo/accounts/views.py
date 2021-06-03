from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import User, Room
from .serializers import UserSerializer, RoomSerializer
from django.contrib.auth.hashers import make_password

class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def perform_create(self, instance):
        instance.save(password=make_password(self.request.data['password']))


class GetUserView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        matches = User.objects.filter(languages_known=user.languages_to_learn)
        content = []
        for match in matches:
            content.append({'user': match.username})
        return Response(content)


class RoomView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        user = request.user
        partner = User.objects.get(username=request.data.get('user'))
        try:
            room = Room.objects.filter(users=user).filter(users=partner).get()
            data = {'url': room.url}
            return Response(data, status=status.HTTP_200_OK)
        except:
            serializer = RoomSerializer(data={'users': [user.pk, partner.pk]})
            if serializer.is_valid():
                serializer.save()
                data = {'url': serializer.data['url']}
                return Response(data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

