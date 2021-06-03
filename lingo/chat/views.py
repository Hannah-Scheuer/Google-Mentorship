from django.shortcuts import render
from rest_framework.authtoken.models import Token
from accounts.models import Room
from django.http import HttpResponseNotFound, HttpResponseForbidden
from django.core.exceptions import ValidationError

def room(request, room_name):
    try:
        room = Room.objects.get(url=room_name)
    except (ValidationError, Room.DoesNotExist):
        return HttpResponseNotFound()

    try:
        token = request.COOKIES.get('token')
        user = Token.objects.get(key=token).user
        if user in room.users.all():
            return render(request, 'chat/room.html', {
                'room_name': room_name,
                'user': user.username,
                'token': token,
            })
        return HttpResponseForbidden() 
    except:
        return HttpResponseForbidden() 
