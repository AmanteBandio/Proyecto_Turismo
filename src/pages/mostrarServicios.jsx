import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/mostrarServicios.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialSection from "../components/SocialSeccion";

const ListarServicios = () => {
  const [servicios, setServicios] = useState([]);
  const [expandedServicio, setExpandedServicio] = useState(null); // Estado para gestionar la expansión

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await axios.get(
          'https://c5532462f07503dfc9b0bb1d4395a98c.serveo.net/api/listar_servicios_aceptados/'
        );

        // Agregar console.log para inspeccionar la respuesta
        console.log("Servicios recibidos:", response.data);

        setServicios(response.data);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };

    fetchServicios();
  }, []);

  // Función para transformar el tipo de oferente
  const transformTipoOferente = (tipoOferente) => {
    switch (tipoOferente) {
      case "bienesServicios":
        return "Bienes y Servicios";
      case "artesano":
        return "Artesano";
      case "cabanas":
        return "Cabañas";
      default:
        return "Administrador"; // Devuelve el valor original si no se encuentra una coincidencia
    }
  };

  const toggleExpand = (id) => {
    setExpandedServicio(expandedServicio === id ? null : id); // Alterna el estado de expansión
  };

  return (
    <div className="services-list-container">
      <Header />
      <div className="services-list">
        <br />
        <h1 className="services-title">Servicios Disponibles</h1>
        <br />
        <div className="services">
          {servicios.length === 0 ? (
            <p>No tienes servicios creados.</p>
          ) : (
            servicios.map((servicio) => (
              <div key={servicio.id} className="service-container">
                <div
                  className={`service-card ${
                    expandedServicio === servicio.id ? "expanded" : "closed"
                  }`}
                  onClick={() => toggleExpand(servicio.id)}
                >
                  {/* Mostrar imagen en la tarjeta cerrada */}
                  <div className="image-gallery">
                    {servicio.imagen ? (
                      <img
                        src={`${'https://c5532462f07503dfc9b0bb1d4395a98c.serveo.net'}${servicio.imagen}`}
                        alt={`Imagen de ${servicio.nombre}`}
                        className="gallery-image"
                        onError={() =>
                          console.error(
                            `Error al cargar la imagen: ${servicio.imagen}`
                          )
                        }
                      />
                    ) : (
                      <div className="gallery-placeholder">Sin imagen</div>
                    )}
                  </div>
  
                  {expandedServicio === servicio.id && (
                    <>
                      <div className="service-header">
                        <h1 className="service-title">{servicio.nombre}</h1>
                        <button
                          className="close-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(null);
                          }}
                        >
                          <p>X</p>
                        </button>
                      </div>
  
                      <div
                        className={`expanded-gallery1 ${
                          servicio.imagen &&
                          !servicio.imagen2 &&
                          !servicio.imagen3 &&
                          !servicio.imagen4
                            ? "single-image"
                            : servicio.imagen &&
                              servicio.imagen2 &&
                              !servicio.imagen3 &&
                              !servicio.imagen4
                            ? "two-images"
                            : servicio.imagen &&
                              servicio.imagen2 &&
                              servicio.imagen3 &&
                              !servicio.imagen4
                            ? "three-images"
                            : "four-images"
                        }`}
                      >
                        {/* Galería expandida */}
                        {servicio.imagen && (
                          <img
                            src={`${'https://c5532462f07503dfc9b0bb1d4395a98c.serveo.net'}${servicio.imagen}`}
                            alt={`Imagen 1 de ${servicio.nombre}`}
                            className="expanded-gallery-image1"
                            onError={() =>
                              console.error(
                                `Error al cargar la imagen: ${servicio.imagen}`
                              )
                            }
                          />
                        )}
                        {servicio.imagen2 && (
                          <img
                            src={`${'https://c5532462f07503dfc9b0bb1d4395a98c.serveo.net'}${servicio.imagen2}`}
                            alt={`Imagen 2 de ${servicio.nombre}`}
                            className="expanded-gallery-image1"
                            onError={() =>
                              console.error(
                                `Error al cargar la imagen: ${servicio.imagen2}`
                              )
                            }
                          />
                        )}
                        {servicio.imagen3 && (
                          <img
                            src={`${'https://c5532462f07503dfc9b0bb1d4395a98c.serveo.net'}${servicio.imagen3}`}
                            alt={`Imagen 3 de ${servicio.nombre}`}
                            className="expanded-gallery-image1"
                            onError={() =>
                              console.error(
                                `Error al cargar la imagen: ${servicio.imagen3}`
                              )
                            }
                          />
                        )}
                        {servicio.imagen4 && (
                          <img
                            src={`${'https://c5532462f07503dfc9b0bb1d4395a98c.serveo.net'}${servicio.imagen4}`}
                            alt={`Imagen 4 de ${servicio.nombre}`}
                            className="expanded-gallery-image1"
                            onError={() =>
                              console.error(
                                `Error al cargar la imagen: ${servicio.imagen4}`
                              )
                            }
                          />
                        )}
                      </div>
  
                      <div className="service-details">
                        <p className="service-description">
                          <strong>Descripción:</strong>{" "}
                          <span>{servicio.descripcion}</span>
                        </p>
  
                        <div className="service-contact">
                          <strong>Redes sociales:</strong>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: servicio.redes_sociales.replace(
                                /\n/g,
                                "<br />"
                              ),
                            }}
                          />
                        </div>
                        <p className="service-email">
                          <strong>Contacto:</strong>{" "}
                          <span>{servicio.telefono || "No disponible"}</span>
                        </p>
                        <p className="service-price">
                          <strong>Valor:</strong>{" "}
                          <span>
                            $
                            {servicio.precio
                              ? Math.round(servicio.precio)
                              : "No disponible"}
                          </span>
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div className="DownCard-MS">
                  <h3 className="service-title">{servicio.nombre}</h3>
                  <h5 className="TipoOferente">
                    {transformTipoOferente(servicio.tipo_oferente) ||
                      "Tipo no disponible"}
                  </h5>
                  <p className="ser-descripcion">
                    {servicio.descripcion.slice(0, 50)}...
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <SocialSection />
      <Footer />
    </div>
  );
  
  
};

export default ListarServicios;
