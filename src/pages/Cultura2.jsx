import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Cultura2.css?v=1.5'; // Estilos específicos para el componente
import Header from '../components/Header';
import '../components/i18n'; // Importa el archivo de configuración
import { useTranslation } from 'react-i18next';
import useCarousel from '../components/useCarousel'; // Hook personalizado para el carrusel

const Cultura4 = () => {
  const { t, i18n } = useTranslation();
  const { currentSlide, nextSlide, prevSlide } = useCarousel(4); // Configurado para 7 slides
  const slideNames = [
    'VizcachazViewpoint',
    'NationalPark',
    'CavesBellotos',
    'Reservoir',
    'Test1',
    'Test2',
    'Test3'
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); // Obtener el idioma guardado
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage); // Cambiar el idioma si es necesario
    }
  }, [i18n]); // Añadir el estado del idioma como dependencia

  return (
    <div className="index-container">
      {/* Navbar */}
      <Header/>

      {/* Hero Section 1 */}
      <div className="hero5">
        <div className="hero-content5">
          <h5>{t('Culture')}</h5>
          <h1>{t('Petroglyphs')}</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h4>
        </div>
      </div>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-content">
          <h5>{t('UnforgettablePlaces')}</h5>
          <h1>{t('Remember')}</h1>
          <p>{t('ColbunBeauty')}</p>
          <button className="btn-blue">{t('Discover')}</button>
        </div>
      </section>

      {/* Hero Section 2 */}
      <div className="hero25">
        <div className="hero-content25">
          <h5>{t('Culture')}</h5>
          <h1>La Guardia</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h4>
        </div>
      </div>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-content">
          <h5>{t('UnforgettablePlaces')}</h5>
          <h1>{t('Remember')}</h1>
          <p>{t('ColbunBeauty')}</p>
          <button className="btn-blue">{t('Discover')}</button>
        </div>
      </section>

      {/* Hero Section 3 */}
      <div className="hero26">
        <div className="hero-content26">
          <h5>{t('Culture')}</h5>
          <h1>{t('Train')}</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h4>
        </div>
      </div>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-content">
          <h5>{t('UnforgettablePlaces')}</h5>
          <h1>{t('Remember')}</h1>
          <p>{t('ColbunBeauty')}</p>
          <button className="btn-blue">{t('Discover')}</button>
        </div>
      </section>

      {/* Hero Section 4 */}
      <div className="hero27">
        <div className="hero-content27">
          <h5>{t('Culture')}</h5>
          <h1>Molino de los Tilos</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h4>
        </div>
      </div>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-content">
          <h5>{t('UnforgettablePlaces')}</h5>
          <h1>{t('Remember')}</h1>
          <p>{t('ColbunBeauty')}</p>
          <button className="btn-blue">{t('Discover')}</button>
        </div>
      </section>
            
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

export default Cultura4;