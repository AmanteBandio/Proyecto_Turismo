import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import '../styles/Rabones.css'; // Estilos específicos para el componente
import Footer from '../components/Footer';
import SocialSection from '../components/SocialSeccion';
import Header from '../components/Header';

const Rabones = () => {

  const [currentSlide, setCurrentSlide] = useState(0); // Estado para el slide actual
  const totalSlides = 4; // Número total de slides

  // Función para manejar las flechas
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides); // Si llega al final, vuelve al inicio
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); // Si está en la primera, va a la última
  };

  // Desliza automáticamente cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);
  
  return (
    <div className="index-container">
      {/* Navbar */}
      <Header/>

      {/* Hero Section */}
      <div className="hero107">
        <div className="hero-content107">
          <h5>¿A donde ir?</h5>
          <h1>Rabones</h1>
          <h4>Rabones es una pintoresca localidad en la comuna de Colbún, en la región del Maule, Chile, que destaca por su tranquilo entorno rural y su impresionante paisaje natural. Rodeada de colinas verdes y bañada por el río Colbún, esta área ofrece una atmósfera serena y un contacto cercano con la naturaleza. En Rabones, los visitantes pueden disfrutar de actividades al aire libre como caminatas y paseos en bicicleta, explorando la belleza escénica de la región. La comunidad local, conocida por su calidez y hospitalidad, contribuye a crear un ambiente acogedor y auténtico. Rabones es el lugar ideal para aquellos que buscan una escapada tranquila en el corazón del Maule, inmersa en la serenidad y el encanto de los paisajes rurales chilenos.</h4>
        </div>
      </div>

      <section className="info-section">
        <div className="info-content">
          <h5>Lugares inolvidables</h5>
          <h1>Algo para no olvidar</h1>
          <p>Descubre la belleza cautivadora de Colbún, donde los tranquilos paisajes rurales se entrelazan con los lagos cristalinos y montañas imponentes que ofrecen una combinación única de naturaleza, aventura al aire libre y un profundo sentido de comunidad. Puedes navegar en las aguas del embalse Machicura, disfrutar de las termas naturales de Panimávida o explorar los senderos que atraviesan los cerros verdes de la región. Colbún te invita a vivir experiencias inolvidables, inmersas en la serenidad y el encanto del corazón de la zona central de Chile.</p>
          <button className="btn-blue">Descubre tu próximo destino</button>
        </div>
      </section>
            
      {/* Carousel Section */}
      <section className="carousel-section1">
        <div className="carousel-header1">
          <h5>Admira</h5>
          <div className="carousel-subheader1">
            <h2>Belleza Natural</h2>
            <a href="#">Ve más <span>&#8594;</span></a>
          </div>
        </div>

        {/* Carrusel de imágenes */}
        <div className="carousel-container1">
          {/* Cards del carrusel */}
          <div className="carousel-card1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-image1"></div>
            <p>Mirador Las Vizcachas</p>
          </div>
          <div className="carousel-card1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-image1"></div>
            <p>Parque Nacional Guaquivilo</p>
          </div>
          <div className="carousel-card1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-image1"></div>
            <p>Cavernas Los Bellotos</p>
          </div>
          <div className="carousel-card1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-image1"></div>
            <p>Embalse Machicura</p>
          </div>
          <div className="carousel-card1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-image1"></div>
            <p>Prueba scroll</p>
          </div>
          <div className="carousel-card1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-image1"></div>
            <p>Prueba 2</p>
          </div>
          <div className="carousel-card1" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="carousel-image1"></div>
            <p>Prueba 3</p>
          </div>
        </div>

        {/* Flechas de control */}
        <button className="carousel-control1 prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control1 next" onClick={nextSlide}>&#10095;</button>
      </section>

    </div>
  );
};

export default Rabones;
