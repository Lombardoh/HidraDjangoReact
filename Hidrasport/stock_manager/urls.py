from django.urls import path
from stock_manager.views import product_list_view, product_detail_view, product_list_filter_view

urlpatterns = [
    path('', product_list_view),
    path('<int:product_id>/', product_detail_view),
    path('<str:category>/', product_list_filter_view),  

    ]