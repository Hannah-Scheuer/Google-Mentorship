from rest_framework import serializers
from .models import User, Room

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'password', 'languages_known', 'languages_to_learn')


class RoomSerializer(serializers.ModelSerializer):
    #users = UserSerializer(many=True)

    class Meta:
        model = Room
        fields = ('url', 'users',)
