# Generated by Django 3.2.19 on 2024-11-01 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20241017_1607'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='tipo_oferente',
            field=models.CharField(blank=True, choices=[('artesano', 'Artesano/a'), ('bienesServicios', 'Bienes y Servicios'), ('cabanas', 'Cabañas')], max_length=20),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.CharField(choices=[('turista', 'Turista'), ('admin', 'Administrador'), ('oferente', 'Oferente')], default='oferente', max_length=20),
        ),
    ]
