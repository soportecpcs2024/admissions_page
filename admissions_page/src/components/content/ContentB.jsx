import React from 'react';
import { FaRegCalendarAlt, FaSearch } from 'react-icons/fa'; // Importamos los íconos
import './ContentB.css'
const ContentB = () => {
  return (
    <div className="content-container">
      <div className="left-section">
        <div className="image-text-container">
          <img src="/DSC06327.JPG" alt="Reserva" className="reserva-image" />
          <p className="overlay-text">
            Para hacer tu reserva de cupo o consultar cómo va tu solicitud, selecciona la opción que según tus necesidades.
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="card-reserva">
          <FaRegCalendarAlt className="icon" />
          <a href="https://cpcs.q10.com/SolicitudesInstitucionales/NuevaSolicitud" className='a-links'>Reserva de cupo</a>
          
        </div>
        <div className="card-reserva">
          <FaSearch className="icon" />
         <a href="https://cpcs.q10.com/SolicitudesInstitucionales/ConsultarSolicitud" className='a-links'>Consultar estado de la reserva</a> 
        </div>
      </div>
    </div>
  );
};

export default ContentB;


