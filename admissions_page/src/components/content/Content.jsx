import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.css";

const Content = () => {
  const navigate = useNavigate();

  const handleOldStudentsClick = () => {
    navigate("/antiguos");
  };

  return (
    <main className="main-content">
      <h1>Bienvenidos a las Admisiones 2025</h1>
      <div className="main-content-p">
        <p>
          Estamos emocionados de recibir a nuevos estudiantes para el año
          académico 2025 en el Colegio Panamericano Colombo Sueco. A
          continuación, encontrarás toda la información necesaria para comenzar
          el proceso de admisión.
        </p>
        <p>
          Nuestra oferta educativa es para todas las familias que deseen una
          excelente educación para sus hijos, con formación integral, con
          disciplina y esfuerzo, en donde las niñas y niños se conviertan en
          ciudadanos competentes y felices, capaces de responder a las
          exigencias del mundo actual con criterio ético y respeto, teniendo en
          cuenta nuestro enfoque basado en la palabra de Dios. El principal
          objetivo del proceso de admisiones del Colegio Panamericano Colombo
          Sueco es que los padres de familia aspirantes se identifiquen con
          nuestra filosofía y encuentren en el proyecto educativo que les
          ofrecemos la institución educativa que desean para sus hijos.
        </p>
      </div>

      <iframe
        className="admission-video"
        src="https://www.youtube.com/embed/Oy20XZLnQAc?si=zsL6W0OCickb21pY"
        title="Video Admisiones"
        allowFullScreen
        loading="lazy"
      ></iframe>

      <div className="main-buttons">
        <a href="https://cpcs.q10.com/Preinscripcion" className="btn btn-info">
          <span>Nuevos</span>
        </a>
        <button onClick={handleOldStudentsClick} className="btn btn-apply">
          <span>Antiguos</span>
        </button>
      </div>
    </main>
  );
};

export default Content;
