import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
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
import logo from "./img/ArchiTek_logo.png";
import { NavLink } from "react-router-dom";

export const Footer = React.forwardRef(({ locale, changeLanguage }, ref) => {
  return (
    <div className="footer" ref={ref}>
      <div className="footerFrstBlok">
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
        <div className="footerParagraph">
          <img src={logo} alt="logo" className="logoImg" />
          <p>
            <FormattedMessage {...messages.footer} />
          </p>
        </div>
        <div className="footerLink">
          <h2>
            <FormattedMessage {...messages.footerLink} />
          </h2>

          <div className="footerLinkBox">
            <div className="footerLinkBoxOne">
              <NavLink to="/">
                <FormattedMessage {...messages.navBarListOne} />
              </NavLink>
              <NavLink to="/aboutUs">
                <FormattedMessage {...messages.navBarListTwo} />
              </NavLink>
              <NavLink to="uslogi">
                <FormattedMessage {...messages.navBarListThree} />
              </NavLink>
              <NavLink to="/Проекты">
                <FormattedMessage {...messages.navBarListFour} />
              </NavLink>
            </div>
            <div className="footerLinkBoxOne">
              <NavLink to="/showJob">
                <FormattedMessage {...messages.navBarListFive1} />
              </NavLink>
              <NavLink to="/showJobOne">
                <FormattedMessage {...messages.navBarListFive2} />
              </NavLink>
              <NavLink to="/workUs">
                <FormattedMessage {...messages.navBarListFive3} />
              </NavLink>
              <NavLink
                to="https://store.steampowered.com/app/2439730/BossHunter_VR/"
                target="_blank"
              >
                <FormattedMessage {...messages.navBarListFive4} />
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <h2>
            <FormattedMessage {...messages.footerContactInfo} />
          </h2>
          <div>
            <div className="adresBox">
              <FontAwesomeIcon icon={faLocationDot} className="hoverYoutube" />
              <span>
                <FormattedMessage {...messages.footerAddress} />
              </span>
            </div>
            <p className="adresPharagrafBox">
              <FormattedMessage {...messages.footerContactInfoAddres} />
            </p>
          </div>
          <div>
            <div className="adresBox">
              <FontAwesomeIcon icon={faMailBulk} className="hoverLinkedin" />
              <span>
                <FormattedMessage {...messages.footerMail} />
              </span>
            </div>
            <p className="adresPharagrafBox">architeksoft@gmail.com</p>
          </div>
          <div>
            <div className="adresBox">
              <FontAwesomeIcon icon={faPhone} className="hoverLinkedin" />
              <span>
                <FormattedMessage {...messages.footerPhone} />
              </span>
            </div>
            <p className="adresPharagrafBox"> 041 184909 | 098 484909</p>
          </div>
        </div>
        <div className="mapGoogle">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33033.549674909!2d44.5130703!3d40.80137325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shy!2sam!4v1736420551085!5m2!1shy!2sam"
            width="250"
            height="160"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
});
