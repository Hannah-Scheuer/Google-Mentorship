from django.urls import path
from . import views
from accounts.views import RoomView

urlpatterns = [
    path('', RoomView.as_view()),
    path('<str:room_name>/', views.room, name='room'),
]
