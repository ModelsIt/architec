import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import logo from "./img/ArchiTek_logo.png";
import en from "./img/EN.png";
import am from "./img/AM.png";
import ru from "./img/RU.png";
import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
import { NavLink } from "react-router-dom";

export const NavBar = ({ onContactClick, changeLanguage }) => {
  const lang = localStorage.getItem("language");
  console.log("-=-lang-=-:", lang);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (lang === "hy") {
      return am;
    } else if (lang === "ru") {
      return ru;
    } else return en;
  });
  const buttonRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid header-top">
      <div className="nav-shaps-2"></div>
      <div className="container d-flex align-items-center">
        <div className="d-flex align-items-center h-100 navBarLogo">
          <NavLink to="#" className="navbar-brand" style={{ height: "125px" }}>
            <NavLink to="#" className="navbar-brand">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </NavLink>
        </div>
        <div className="w-100 h-100">
          <div
            className="topbar px-0 py-2 d-none d-lg-block"
            style={{ height: "45px" }}
          >
            <div className="row gx-0 align-items-center">
              <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                <div className="d-flex flex-wrap">
                  <div className="pe-4">
                    <NavLink to="#" className="text-muted small">
                      <i className="fas fa-envelope text-primary me-2"></i>
                      architeksoft@gmail.com
                    </NavLink>
                  </div>
                  <div className="pe-0">
                    <NavLink to="#" className="text-muted small">
                      <i className="fa fa-clock text-primary me-2"></i>Mon -
                      Sat: 9.00 am-7.00 pm
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <div className="d-flex justify-content-end">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bar px-0 py-lg-0" style={{ height: "80px" }}>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
              <NavLink to="#" className="navbar-brand-2">
                <img src={logo} alt="logo" className="logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-0 mx-lg-auto">
                  <NavLink to="/" className="nav-item nav-link">
                    <FormattedMessage {...messages.navBarListOne} />
                  </NavLink>
                  <NavLink to="/aboutUs" className="nav-item nav-link">
                    <FormattedMessage {...messages.navBarListTwo} />
                  </NavLink>
                  <NavLink to="/uslogi" className="nav-item nav-link">
                    <FormattedMessage {...messages.navBarListThree} />
                  </NavLink>
                  <NavLink to="/Проекты" className="nav-item nav-link">
                    <FormattedMessage {...messages.navBarListFour} />
                  </NavLink>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="dropdown-toggle">
                        <FormattedMessage {...messages.navBarListFive} />
                      </span>
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/showJob" className="dropdown-item">
                        <FormattedMessage {...messages.navBarListFive1} />
                      </NavLink>
                      <NavLink to="/showJobOne" className="dropdown-item">
                        <FormattedMessage {...messages.navBarListFive2} />
                      </NavLink>
                      <NavLink to="/workUs" className="dropdown-item">
                        <FormattedMessage {...messages.navBarListFive3} />
                      </NavLink>
                      <NavLink
                        to="https://store.steampowered.com/app/2439730/BossHunter_VR/"
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FormattedMessage {...messages.navBarListFive4} />
                      </NavLink>
                    </div>
                  </div>
                  <button
                    to="Связаться с нами"
                    className="nav-item nav-link"
                    onClick={onContactClick}
                  >
                    <FormattedMessage {...messages.navBarListSix} />
                  </button>
                </div>
              </div>
              <div>
                {/* Button to Open Modal */}
                <button
                  ref={buttonRef}
                  className="toggle-btn"
                  onClick={toggleModal}
                >
                  <img
                    src={currentLanguage}
                    alt="Current Language"
                    className="languageImg"
                  />
                </button>

                {/* Modal */}
                <div
                  className={`modal-container ${isOpen ? "open" : ""}`}
                  // style={{
                  //   position: "absolute",
                  //   top: 85,
                  //   left: 895,
                  //   display: isOpen ? "block" : "none",
                  // }}

                  style={{
                    position: "fixed",
                    top: "20%",
                    left: "82%",
                    transform: "translate(-50%, -20%)",
                    display: isOpen ? "block" : "none",
                  }}
                >
                  <div className="modal-content">
                    <div className="language-options">
                      <button
                        onClick={() => {
                          changeLanguage("en");
                          setCurrentLanguage(en);
                          toggleModal();
                        }}
                      >
                        <img src={en} alt="English" />
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage("hy");
                          setCurrentLanguage(am);
                          toggleModal();
                        }}
                      >
                        <img src={am} alt="Armenian" />
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage("ru");
                          setCurrentLanguage(ru);
                          toggleModal();
                        }}
                      >
                        <img src={ru} alt="Russian" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
