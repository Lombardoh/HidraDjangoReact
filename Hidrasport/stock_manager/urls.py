from django.urls import path
from stock_manager.views import product_list_view

urlpatterns = [
    path('', product_list_view),
    ]