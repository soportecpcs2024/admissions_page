import React from "react";
import "./Footer.css";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box_1">
        
        <div className="footer-item">
          <FaSchoolCircleCheck className="footer-icon" />
          <p>
            <strong>COLEGIO PANAMERICANO COLOMBO SUECO</strong>
          </p>
        </div>
        <div className="footer-item">
          <FaMagnifyingGlassLocation className="footer-icon" />
          <p>
            <strong>Cra 83 N° 78 - 30 (Robledo Diamante)</strong>
          </p>
        </div>
        <div className="footer-item">
          <FaPhoneVolume className="footer-icon" />
          <p>
            <strong>(604)442-06-06</strong>
          </p>
        </div>
        <div className="footer-item">
          <p>
            <strong>
              <div className="div_link">
          <IoLogoWhatsapp className="footer-icon-whatsapp" />
                <a
                  href="https://wa.me/573007277799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Colegio Panamericano Colombo Sueco
                </a>
              </div>
            </strong>
          </p>
        </div>
      </div>
      <div className="box_2">
        <p>All Rights Reserved. &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
