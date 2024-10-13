# Generated by Django 5.1.2 on 2024-10-13 20:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_solicitudoferente'),
    ]

    operations = [
        migrations.CreateModel(
            name='Servicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('correo', models.EmailField(max_length=254)),
                ('redes_sociales', models.CharField(blank=True, max_length=255)),
                ('imagen1', models.ImageField(upload_to='servicios/')),
                ('imagen2', models.ImageField(blank=True, upload_to='servicios/')),
                ('imagen3', models.ImageField(blank=True, upload_to='servicios/')),
                ('imagen4', models.ImageField(blank=True, upload_to='servicios/')),
                ('descripcion', models.TextField()),
                ('valoracion', models.PositiveIntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
