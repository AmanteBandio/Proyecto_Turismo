"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from accounts.views import (
    CustomAuthToken,
    RegisterView,
    SolicitudOferenteView,
    ManejarSolicitudOferenteView,
    ListarSolicitudesView,
    CrearServicioView,
    ListarServiciosView,
    ManejarServiciosView,  # Asegúrate de que esto está importado
    ListarServiciosAceptadosView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', CustomAuthToken.as_view(), name='login'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/solicitar_oferente/', SolicitudOferenteView.as_view(), name='solicitar_oferente'),
    path('api/manejar_solicitud/<int:solicitud_id>/', ManejarSolicitudOferenteView.as_view(), name='manejar_solicitud'),
    path('api/solicitudes/', ListarSolicitudesView.as_view(), name='listar_solicitudes'),
    path('api/crear_servicio/', CrearServicioView.as_view(), name='crear_servicio'),
    path('api/servicios/', ListarServiciosView.as_view(), name='listar_servicios'),
    path('api/manejar_servicios/<int:servicio_id>/', ManejarServiciosView.as_view(), name='manejar_servicios'),
    path('api/listar_servicios_aceptados/', ListarServiciosAceptadosView.as_view(), name='listar_servicios_aceptados'),
]