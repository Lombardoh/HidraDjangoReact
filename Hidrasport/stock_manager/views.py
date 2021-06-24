from stock_manager.models import Product
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProductSerializer

# Create your views here.
@api_view(['GET'])
def product_list_view(request):
    qs = Product.objects.all()
    serializer = ProductSerializer(qs, many = True)
    return Response(serializer.data)