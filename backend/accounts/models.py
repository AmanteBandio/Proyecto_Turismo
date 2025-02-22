from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin  # Importa clases necesarias para la creación de un usuario personalizado: AbstractBaseUser para la base de usuarios, BaseUserManager para gestionar la creación de usuarios, y PermissionsMixin para manejar los permisos.
from django.db import models  # Importa el módulo models para definir modelos en Django.

class CustomUserManager(BaseUserManager):  # Define una clase CustomUserManager que hereda de BaseUserManager para manejar la creación de usuarios personalizados.
    
    def create_user(self, email, password=None, **extra_fields):  # Método para crear un usuario normal con email y contraseña.
        if not email:  # Verifica si se ha proporcionado un email.
            raise ValueError('El email debe ser proporcionado')  # Lanza una excepción si no se proporciona el email.
        email = self.normalize_email(email)  # Normaliza el email (por ejemplo, convierte a minúsculas).
        user = self.model(email=email, **extra_fields)  # Crea una instancia del modelo de usuario con el email y los campos adicionales.
        user.set_password(password)  # Establece la contraseña utilizando el método de cifrado adecuado.
        user.save(using=self._db)  # Guarda el usuario en la base de datos utilizando la conexión de base de datos actual.
        return user  # Devuelve el usuario creado.
    
    def create_superuser(self, email, password=None, **extra_fields):  # Método para crear un superusuario.
        extra_fields.setdefault('is_staff', True)  # Asegura que el campo 'is_staff' sea True para superusuarios.
        extra_fields.setdefault('is_superuser', True)  # Asegura que el campo 'is_superuser' sea True.
        extra_fields.setdefault('role', 'admin')  # Establece el rol del superusuario a 'admin' por defecto.
        
        return self.create_user(email, password, **extra_fields)  # Llama al método create_user para crear el superusuario con los campos adicionales.

class CustomUser(AbstractBaseUser, PermissionsMixin):  # Define un modelo CustomUser que hereda de AbstractBaseUser para la base del usuario y de PermissionsMixin para gestionar permisos.
    email = models.EmailField(unique=True)  # Campo de email, único para cada usuario.
    first_name = models.CharField(max_length=30, blank=False, null=False)  # Campo Obligatorio para el primer nombre del usuario en formulario y base de datos.
    last_name = models.CharField(max_length=30, blank=False, null=False)  # Campo Obligatorio para el apellido del usuario en formulario y base de datos.
    is_active = models.BooleanField(default=False)  # Indica si la cuenta está activa; por defecto False.
    is_staff = models.BooleanField(default=False)  # Indica si el usuario es parte del personal administrativo.

    ROLE_CHOICES = (  # Definición de los roles posibles para el usuario.
        ('admin', 'Administrador'),  # Opción de rol 'admin'.
        ('oferente', 'Oferente'),  # Opción de rol 'oferente'.
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='oferente')  # Campo que almacena el rol del usuario, por defecto 'oferente'.

    OFERENTE_CHOICES = [
        ('artesano', 'artesano'),
        ('bienesServicios', 'bienesServicios'),
        ('cabanas', 'cabanas')
    ]
    tipo_oferente = models.CharField(max_length=20, choices=OFERENTE_CHOICES, default='artesano')

    # Nuevo campo para detectar si es la primera vez que se inicia sesión
    is_first_login = models.BooleanField(default=True)

    objects = CustomUserManager()  # Asigna el CustomUserManager como el administrador de usuarios.

    USERNAME_FIELD = 'email'  # Define el campo que se usará para identificar al usuario en el login (email en lugar de username).
    REQUIRED_FIELDS = []  # No requiere campos adicionales para el registro.

    def __str__(self):  # Define la representación en string del usuario.
        return self.email  # Muestra el email como la representación del usuario.


