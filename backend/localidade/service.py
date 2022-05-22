from localidade.models import LocalidadeModels
from django.forms import ValidationError


def create_localidade(nome:str, longitude:float, latitude:float):
    __valida_longitude__(longitude)
    __valida_latitude__(latitude)
    localidade = LocalidadeModels(nome=nome, longitude=longitude, latitude=latitude)
    localidade.full_clean()
    localidade.save()

    return localidade


def __valida_longitude__(longitude:float):
    if longitude > 180 or longitude < -180:
        raise ValidationError('Digite uma longitude entre -180 e 180')
    else:
        pass


def __valida_latitude__(latitude:float):
    if latitude > 90 or latitude < -90:
        raise ValidationError('Digite uma latitude entre -90 e 90')
    else:
        pass