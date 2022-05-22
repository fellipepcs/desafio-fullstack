from rest_framework import serializers
from localidade.models import LocalidadeModels

class LocalidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalidadeModels
        fields = ('nome','longitude','latitude')