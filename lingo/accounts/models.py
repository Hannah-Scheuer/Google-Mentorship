from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# TODO: make this more generalizable
LANGUAGES = (
    ("EN", "English"),
    ("ES", "Spanish")
)

class User(AbstractUser):
    languages_known = models.CharField(max_length=255, choices=LANGUAGES)
    languages_to_learn = models.CharField(max_length=255, choices=LANGUAGES)

class Room(models.Model):
    url = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    users = models.ManyToManyField(User)
