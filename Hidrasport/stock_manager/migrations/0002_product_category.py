# Generated by Django 3.2.4 on 2021-07-05 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock_manager', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(default='hombre', max_length=20),
            preserve_default=False,
        ),
    ]
