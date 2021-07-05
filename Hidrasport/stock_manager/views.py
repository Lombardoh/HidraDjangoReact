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

@api_view(['GET'])
def product_detail_view(request, product_id):
    qs = Product.objects.filter(id = product_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = ProductSerializer(obj)
    return Response(serializer.data)

@api_view(['GET'])
def product_list_filter_view(request, category):
    qs = Product.objects.filter(category = category)
    serializer = ProductSerializer(qs, many = True)
    return Response(serializer.data)
