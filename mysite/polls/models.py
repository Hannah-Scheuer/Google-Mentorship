import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
<<<<<<< HEAD
    def __str__(self):
        return self.question_text
    datetime.timedelta(days=1)

=======
    
    def __str__(self):
        return self.question_text
    
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
>>>>>>> 82bce6faca3fcb79490bdba469b2db437797ee6e

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
<<<<<<< HEAD
    def __str__(self):
        return self.choice_text
=======

    def __str__(self):
        return self.choice_text


>>>>>>> 82bce6faca3fcb79490bdba469b2db437797ee6e
