import React from 'react';
import './Locacion.css';
import { Link } from 'react-router-dom';

export default function EventPage() {
  return (
    <div className="event-page">
      <div className="event-image">
        <img
          src="/salaevento.jpg"
          alt="Conference Room"
          className="room-image"
        />
      </div>

      {/* Right side - Event Details */}
      <div className="event-details">
        <div className="event-info">
          <h2 className="info-title">Lugar</h2>
          <h1 className="hotel-name">Hotel Quito Host</h1>
          <p className="hotel-location">Salón de Eventos - Quito</p>

          <h2 className="info-title">Fecha</h2>
          <p className="event-date">26 de abril del 2025</p>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0457842762766!2d-70.64191368480174!3d-33.44126798077584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a7e0f9a39b%3A0x6ef3df9d6d9c3f4e!2sHotel%20Plaza%20San%20Francisco!5e0!3m2!1sen!2sus!4v1633642461619!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="map-iframe"
            ></iframe>
            <a 
              href="https://www.google.com/maps/place/Hotel+Plaza+San+Francisco/@-33.4412679,-70.6419137,17z/data=!3m1!4b1!4m8!3m7!1s0x9662c5a7e0f9a39b:0x6ef3df9d6d9c3f4e!5m2!4m1!1i2!8m2!3d-33.4412724!4d-70.639725" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link"
            >
              Ampliar el mapa
            </a>
          </div>
        </div>

        <Link to="/asientos">
        <button className="buy-tickets-button">
          Comprar entradas
        </button>
        </Link>
      </div>
    </div>
  );
}