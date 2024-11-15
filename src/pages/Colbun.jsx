import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Colbun.css';
import Header from '../components/Header';
import '../components/i18n';
import { useTranslation } from 'react-i18next';
import useCarousel from '../components/useCarousel'; // Importa el hook personalizado
import LeafletMap from '../components/LeafletMap'; // Importa el componente de LeafletMap

// Importa las imágenes
import img1 from '../assets/img/PXL_20240927_102434354.jpg';
import img2 from '../assets/img/Cultural.png';
import img3 from '../assets/img/Parque.png';
import img4 from '../assets/img/PXL_20240927_112617725.jpg';
import img5 from '../assets/img/PXL_20240927_112819235.jpg';
import img6 from '../assets/img/PXL_20240927_120450869.jpg';
import img7 from '../assets/img/PXL_20240927_114154883.jpg';
import img8 from '../assets/img/PXL_20240927_102434354.jpg';

const Colbun = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [isFirstMap, setIsFirstMap] = useState(true);
  
  const { t, i18n } = useTranslation();
  const { currentSlide, nextSlide, prevSlide } = useCarousel(4); // Usa el hook personalizado
  const slideNames = [
    { name: 'VizcachazViewpoint', image: img1 },
    { name: 'NationalPark', image: img2 },
    { name: 'CavesBellotos', image: img3 },
    { name: 'Reservoir', image: img4 },
    { name: 'LakeColbun', image: img5 },
    { name: 'HillViewpoint', image: img6 },
    { name: 'ToroWaterfall', image: img7 },
    { name: 'AnotherLocation', image: img8 }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }

    // Fetch data from the Django API
    fetch('http://localhost:8000/api/lugares/buscar/?nombre=colbun') // Cambia el nombre por el lugar turístico que necesites
      .then(response => response.json())
      .then(data => {
        setLat(data.latitud);
        setLng(data.longitud);
      })
      .catch(error => console.error('Error fetching location data:', error));
  }, [i18n]);

  const toggleMap = () => {
    setIsFirstMap(!isFirstMap);
  };

  return (
    <div className="index-container">
      <Header />

      <div className="hero21">
        <div className="hero-content21">
          <h5>{t('WhereToGo')}</h5>
          <h1>Colbún</h1>
          <h4>{t('ColbunInfo')}</h4>
        </div>
      </div>

      <div className="info-section1">
        <section className="map-section">
          {lat && lng && isFirstMap ? (
            <LeafletMap latitud={lat} longitud={lng} mapId={"colbunMap"} />
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
          <div className="button-group">
            <button className="btn-blue" onClick={() => window.open("#", "_blank")}>
              {t('Discover')}
            </button>
            <button className="btn-blue2" onClick={toggleMap}>
              <i className="bi bi-geo-alt"></i>
            </button>
          </div>
        </section>
      </div>

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
          {slideNames.map((slide, index) => (
            <div
              key={index}
              className="carousel-card1"
              style={{
                transform: `translateX(-${currentSlide * (window.innerWidth <= 768 ? 113 : 130)}%)`
              }}
            >
              <img src={slide.image} alt={t(slide.name)} className="carousel-image1" />
              <p>{t(slide.name)}</p>
            </div>
          ))}
        </div>

        <button className="carousel-control1 prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control1 next" onClick={nextSlide}>&#10095;</button>
      </section>
    </div>
  );
};

export default Colbun;