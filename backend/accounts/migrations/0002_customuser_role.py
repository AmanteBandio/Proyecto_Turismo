# Generated by Django 5.1.2 on 2024-10-13 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='role',
            field=models.CharField(choices=[('turista', 'Turista'), ('admin', 'Administrador'), ('oferente', 'Oferente')], default='turista', max_length=20),
        ),
    ]
