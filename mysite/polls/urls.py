from django.urls import path

from . import views

<<<<<<< HEAD
urlpatterns = [
    path('', views.index, name='index'),
]
=======
app_name = 'polls'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
]

>>>>>>> 82bce6faca3fcb79490bdba469b2db437797ee6e
