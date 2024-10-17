from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.conf import settings
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El email debe ser proporcionado')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'admin')  # Establecer el rol a "admin"

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=False)  # Cambiado a False
    is_staff = models.BooleanField(default=False)
    
    ROLE_CHOICES = (
        ('turista', 'Turista'),
        ('admin', 'Administrador'),
        ('oferente', 'Oferente'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='turista')

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
    
# Modelo para las solicitudes de los usuarios para convertirse en oferentes
class SolicitudOferente(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    servicio = models.CharField(max_length=255)
    estado = models.CharField(max_length=50, default='pendiente')
    created_at = models.DateTimeField(auto_now_add=True)  # Campo de fecha de creación

    def __str__(self):
        return f"{self.user.email} - {self.servicio} - {self.estado}"

# Modelo para los servicios proporcionados por los oferentes

class Servicio(models.Model):
    nombre = models.CharField(max_length=255)
    correo = models.EmailField()
    redes_sociales = models.CharField(max_length=255)
    descripcion = models.TextField()
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    estado = models.CharField(max_length=20, default='pendiente') 
    administrador = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='admin_servicios', null=True, blank=True, on_delete=models.SET_NULL)

    fecha_accion = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre
