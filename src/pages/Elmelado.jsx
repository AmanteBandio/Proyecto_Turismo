import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LeafletMap from '../components/LeafletMap';
import '../styles/Elmelado.css?v=1.6'; // Estilos específicos para el componente
import Header from '../components/Header';
import '../components/i18n'; // Importa el archivo de configuración
import { useTranslation } from 'react-i18next';
import useCarousel from '../components/useCarousel'; // Importa el hook personalizado


const Elmelado = () => {
  const lat = -35.847518970858225;
  const lng = -71.05518511993768;
  const [isFirstMap, setIsFirstMap] = useState(true); // Estado para alternar entre los mapas
  const { currentSlide, nextSlide, prevSlide } = useCarousel(4); // Usa el hook personalizado
  const { t, i18n } = useTranslation(); // Hook para usar traducciones

  // Nombres de las tarjetas
  const slideNames = [
    'VizcachazViewpoint',
    'NationalPark',
    'CavesBellotos',
    'Reservoir',
    'LakeColbun',
    'HillViewpoint',
    'ToroWaterfall',
    'AnotherLocation'
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); // Obtener el idioma guardado
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage); // Cambiar el idioma si es necesario
    }
  }, [i18n]); // Añadir el estado del idioma como dependencia

  // Función para alternar entre los mapas
  const toggleMap = () => {
    setIsFirstMap(!isFirstMap);
  };

  return (
    <div className="index-container">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <div className="hero0">
        <div className="hero-content0">
          <h5>{t('WhereToGo')}</h5>
          <h1>El Melado</h1>
          <h4>{t('MeladoInfo')}</h4>
        </div>
      </div>

      <div className="info-section1">
        {/* Map Section */}
        <section className="map-section">
          {isFirstMap ? (
            <LeafletMap latitud={lat} longitud={lng}/>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1729508776865!6m8!1m7!1sCAoSLEFGMVFpcE52eG9fOUs1ZkRac2VzYnNNQ3hsYnBpOWFOdnJpcUFUU0VSazhv!2m2!1d-35.87360339666832!2d-71.11635919023739!3f166.054998459084!4f12.54037435121353!5f0.7820865974627469"
              width="100%"
              height="1200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          )}
        </section>

        {/* Existing Content Section */}
        <section className="info-content">
          <h5>{t('UnforgettablePlaces')}</h5>
          <h1>{t('Remember')}</h1>
          <p>{t('ColbunBeauty')}</p>
          {/* Contenedor para alinear los botones */}
          <div className="button-group">
            <button className="btn-blue" onClick={() => window.open("https://maps.app.goo.gl/GZSD4dNAL8uKZx1N6", "_blank")}>
            {t('Discover')}
            </button>
            {/* Botón pequeño para cambiar entre los mapas */}
            <button className="btn-blue2" onClick={toggleMap}>
            <i className="bi bi-geo-alt"></i>
            </button>
          </div>
        </section>
      </div>

      {/* Carousel Section */}
      <section className="carousel-section1">
        <div className="carousel-header1">
          <h5>{t('Admire')}</h5>
          <div className="carousel-subheader1">
            <h2>{t('NaturalBeauty')}</h2>
            <a href="#">{t('ViewMore')}<span>&#8594;</span></a>
          </div>
        </div>

        {/* Carrusel de imágenes */}
        <div className="carousel-container1">
          {slideNames.map((slideName, index) => (
            <div
              key={index}
              className="carousel-card1"
              style={{
                transform: `translateX(-${currentSlide * (window.innerWidth <= 768 ? 113 : 130)}%)`
              }}
            >
              <div className="carousel-image1"></div>
              <p>{t(slideName)}</p>
            </div>
          ))}
        </div>

        {/* Flechas de control */}
        <button className="carousel-control1 prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control1 next" onClick={nextSlide}>&#10095;</button>
      </section>
    </div>
  );
};

export default Elmelado;
