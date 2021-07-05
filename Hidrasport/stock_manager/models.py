from django.db import models

# Create your models here.
class Product(models.Model):
    nombre = models.CharField(max_length=100)
    #image = models.ImageField(upload_to='products/')
    precio = models.FloatField()
    category = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre