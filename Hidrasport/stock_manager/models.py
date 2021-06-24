from django.db import models

# Create your models here.
class Product(models.Model):
    nombre = models.CharField(max_length=100)
    #image = models.ImageField(upload_to='products/')
    precio = models.FloatField()

    def __str__(self):
        return self.nombre