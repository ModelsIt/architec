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
  faWhatsapp,
  faMailBulk,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./img/ArchiTek_logo.png";
import { NavLink } from "react-router-dom";

export const Footer = React.forwardRef(({ locale, changeLanguage }, ref) => {
  return (
    <div className="footer" ref={ref}>
      <div className="footerTwoBlok">
        <div className="footerLink">
          <h2>
            <FormattedMessage {...messages.footerLink} />
          </h2>

          <div className="footerLinkBox">
            <div className="footerLinkContainer">
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
              <div className="footerLinkBoxTwo">
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
        </div>

        <div className="footerParagraph">
          <img src={logo} alt="logo" className="logoImg" />
          <p
            className="logoParagraph"
            style={{
              margin: 0,
            }}
          >
            <FormattedMessage {...messages.footer} />
          </p>
        </div>

        <div className="footerContactInformation">
          <h2>
            <FormattedMessage {...messages.footerContactInfo} />
          </h2>

          <div className="footerContactBox">
            <div className="footerContactBoxOne">
              <NavLink to="#" className="text-muted small">
                <i className="fa fa-clock text-primary me-2"></i>Mon - Sat: 9.00
                am-7.00 pm
              </NavLink>
              <div className="addressBoxContainer">
                <div className="adresBox">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="hoverYoutube"
                  />
                  <span className="IconTitle">
                    <FormattedMessage {...messages.footerAddress} />
                  </span>
                </div>

                <p className="adresPharagraf">
                  <FormattedMessage {...messages.footerContactInfoAddres} />
                </p>
              </div>
              <div className="addressContainer">
                <div className="adresBox">
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="hoverLinkedin"
                  />
                  <span className="IconTitle">
                    <FormattedMessage {...messages.footerMail} />
                  </span>
                </div>
                <p className="adresPharagrafBox">architeksoft@gmail.com</p>
              </div>
            </div>

            <div className="footerContactBoxTwo">
              <div className="col-lg-4 text-center text-lg-end">
                <div className="d-flex ">
                  <div className="d-flex pe-3">
                    <NavLink
                      className="btn p-0 text-primary me-3 border"
                      to="https://facebook.com/ArchiTekSoft"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f fb"></i>
                    </NavLink>
                    <NavLink
                      className="btn p-0 text-primary me-3 border"
                      to="https://youtube.com/@ArchiTekSoft"
                      target="_blank"
                    >
                      <i className="fab fa-youtube youtube"></i>
                    </NavLink>
                    <NavLink
                      className="btn p-0 text-primary me-3 border"
                      to="https://instagram.com/Architek_Soft"
                      target="_blank"
                    >
                      <i className="fab fa-instagram insta"></i>
                    </NavLink>
                    <NavLink
                      className="btn p-0 text-primary me-0 border"
                      to="https://linkedin.com/company/architek-soft"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in linkedin"></i>
                    </NavLink>

                    <NavLink
                      className="btn p-0 text-primary me-0 border"
                      to="https://t.me/ArchiTek_Soft"
                      target="_blank"
                    >
                      <i className="fab fa-telegram telegram"></i>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="whatsappIconBox">
                <div className="adresBox">
                  <i className="fab fa-whatsapp"></i>

                  <span className="IconTitle">WhatsApp</span>
                </div>
                <p className="phoneNumber"> 041 184909 </p>
              </div>

              <div className="phoneContainer">
                <div className="adresBox">
                  <FontAwesomeIcon icon={faPhone} className="hoverLinkedin" />
                  <span className="IconTitle">
                    <FormattedMessage {...messages.footerPhone} />
                  </span>
                </div>
                <p className="phoneNumber"> 041 184909 | 098 484909</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
