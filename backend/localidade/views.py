from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from localidade.models import LocalidadeModels
from localidade.serializers import LocalidadeSerializer
from localidade.service import create_localidade


class LocalidadeViewsSets(viewsets.ModelViewSet):
    serializer_class = LocalidadeSerializer
    queryset = LocalidadeModels.objects.all()

    def create(self, request, *args, **kwargs):
        dados = request.data
        try:
            create_localidade(nome=dados['nome'],
                            longitude=dados['longitude'],
                            latitude=dados['latitude'])
            message = 'Localidade salva!'
            return Response(message, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)