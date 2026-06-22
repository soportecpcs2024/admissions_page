import React from "react";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import "./ContentB.css";

const ContentB = () => {
  return (
    <main className="reservation">
      <section className="reservation__container">
        <div className="reservation__image-box">
          <LazyLoad height={260} offset={100}>
            <img
              src="/antiguosR-small.JPG"
              srcSet="/antiguosR-small.JPG 500w, /antiguosR.JPG 1000w"
              sizes="(max-width: 600px) 500px, 1000px"
              alt="Reserva de cupo CPCS"
              className="reservation__image"
            />
          </LazyLoad>

          <div className="reservation__overlay">
            <span>Estudiantes antiguos</span>
            <h1>Reserva de cupo</h1>
            <p>
              Realiza tu reserva de cupo o consulta el estado de tu solicitud
              seleccionando la opción correspondiente.
            </p>
          </div>
        </div>

        <div className="reservation__actions">
          <a
            href="https://cpcs.q10.com/SolicitudesInstitucionales/NuevaSolicitud"
            className="reservation__card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRegCalendarAlt className="reservation__icon" />
            <div>
              <h2>Reserva de cupo</h2>
              <p>Inicia una nueva solicitud institucional.</p>
            </div>
          </a>

          <a
            href="https://cpcs.q10.com/SolicitudesInstitucionales/ConsultarSolicitud"
            className="reservation__card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSearch className="reservation__icon" />
            <div>
              <h2>Consultar estado</h2>
              <p>Revisa cómo va tu solicitud de reserva.</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContentB;