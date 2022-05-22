from django.db import models

# Create your models here.

class LocalidadeModels(models.Model):
    nome = models.CharField(max_length=255, blank=False)
    latitude = models.FloatField(null=False, blank=False)
    longitude = models.FloatField(null=False, blank=False)

    class Meta:
        db_table = 'localidade'
