import React from "react";
import "./Footer.css";
import {
  FaSchoolCircleCheck,
  FaMagnifyingGlassLocation,
  FaPhoneVolume,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <div className="footer__item">
            <FaSchoolCircleCheck className="footer__icon" />
            <span>Colegio Panamericano Colombo Sueco</span>
          </div>

          <div className="footer__item">
            <FaMagnifyingGlassLocation className="footer__icon" />
            <span>Cra 83 N° 78 - 30, Robledo Diamante</span>
          </div>

          <div className="footer__item">
            <FaPhoneVolume className="footer__icon" />
            <span>(604) 442-06-06</span>
          </div>
        </div>

        <a
          href="https://wa.me/573011774167"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__whatsapp"
        >
          <IoLogoWhatsapp className="footer__whatsapp-icon" />
          <span>WhatsApp CPCS</span>
        </a>
      </div>

      <div className="footer__bottom">
        <p>Todos los derechos reservados &copy; 2027</p>
      </div>
    </footer>
  );
};

export default Footer;