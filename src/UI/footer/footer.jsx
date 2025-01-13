import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMailBulk,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export const Footer = ({ ref }) => {
  return (
    <div className="footer" ref={ref}>
      <div className="footerFrstBlok">
        <div className="footerInputBox">
          <input type="text" placeholder="Email address to Subscribe" />
          <button>Subscribe</button>
        </div>
        <div className="IconBox">
          <NavLink to="https://youtube.com/@ArchiTekSoft" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="hoverYoutube" />
          </NavLink>
          <NavLink to="https://instagram.com/Architek_Soft" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="hoverInstagram" />
          </NavLink>

          <NavLink to="https://facebook.com/ArchiTekSoft" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="hoverFacebook" />
          </NavLink>

          <NavLink
            to="https://linkedin.com/company/architek-soft"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="hoverLinkedin" />
          </NavLink>
        </div>
      </div>
      <div className="footerTwoBlok">
        <div>
          <h2>Fitness</h2>
          <p> Dolor amet sit justo amet elitr clita</p>
          <p>ipsum elitr est.Lorem ipsum dolor sit</p>
          <p>amet, consectetur adipiscing elit</p>
          <p>consectetur adipiscing elit.</p>
        </div>
        <div className="footerLink">
          <h2>Быстрые ссылки</h2>
          <NavLink to="#">Главная</NavLink>
          <NavLink to="#"> О нас</NavLink>
          <NavLink to="#">Услуги</NavLink>
          <NavLink to="#">Проекты</NavLink>
        </div>
        <div>
          <h2>Контактная информация</h2>
          <div>
            <div className="adresBox">
              <FontAwesomeIcon icon={faLocationDot} className="hoverYoutube" />

              <span>Адрес</span>
            </div>
            <p className="adresPharagrafBox">123 street New York</p>
          </div>
          <div>
            <div className="adresBox">
              <FontAwesomeIcon icon={faMailBulk} className="hoverLinkedin" />
              <span>электронной почте</span>
            </div>
            <p className="adresPharagrafBox">info@example.com</p>
          </div>
          <div>
            <div className="adresBox">
              <FontAwesomeIcon icon={faPhone} className="hoverLinkedin" />
              <span>Телефон</span>
            </div>
            <p className="adresPharagrafBox">(+012) 3456 7890 123</p>
          </div>
        </div>
        <div>
          <h2>Недавние работы</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33033.549674909!2d44.5130703!3d40.80137325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shy!2sam!4v1736420551085!5m2!1shy!2sam"
            width="250"
            height="160"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
