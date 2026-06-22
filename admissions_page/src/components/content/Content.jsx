import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.css";

const Content = () => {
  const navigate = useNavigate();

  return (
    <main className="admissions">
      <section className="admissions__hero">
        <span className="admissions__label">Proceso de admisión</span>

        <h1>Bienvenidos a las Admisiones 2027</h1>

        <div className="admissions__text">
          <p>
            Estamos emocionados de recibir a nuevos estudiantes para el año
            académico 2027 en el Colegio Panamericano Colombo Sueco. A
            continuación, encontrarás toda la información necesaria para iniciar
            el proceso de admisión.
          </p>

          <p>
            Nuestra oferta educativa está dirigida a las familias que desean una
            formación integral para sus hijos, basada en la excelencia académica,
            la disciplina, el esfuerzo, los valores y el respeto, teniendo como
            fundamento nuestro enfoque basado en la palabra de Dios.
          </p>
        </div>

        <div className="admissions__video">
          <iframe
            src="https://www.youtube.com/embed/Oy20XZLnQAc?si=zsL6W0OCickb21pY"
            title="Video Admisiones CPCS"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="admissions__actions">
          <a
            href="https://cpcs.q10.com/Preinscripcion"
            className="admissions__btn admissions__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estudiantes nuevos
          </a>

          <button
            type="button"
            onClick={() => navigate("/antiguos")}
            className="admissions__btn admissions__btn--secondary"
          >
            Estudiantes antiguos
          </button>
        </div>
      </section>
    </main>
  );
};

export default Content;