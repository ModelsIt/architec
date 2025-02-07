import React, { useState, useRef, useEffect } from "react";
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
    if (lang === "en") {
      return en;
    } else if (lang === "hy") {
      return am;
    } else if (lang === "ru") {
      return ru;
    } else {
      return en;
    }
  });
  const buttonRef = useRef(null);
  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const handleLogoClick = () => {
    window.location.reload();
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="container-fluid header-top">
      <div className="nav-shaps-2"></div>
      <div className="container d-flex align-items-center">
        <div className="d-flex align-items-center h-100 navBarLogo">
          <NavLink
            to="#"
            className="navbar-brand"
            style={{ height: "125px" }}
            onClick={handleLogoClick}
          >
            <NavLink to="#" className="navbar-brand">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </NavLink>
        </div>
        <div className="w-100 h-100">
          <div
            className="nav-bar px-0 py-lg-0"
            style={{
              height: "80px",
              display: "flex",
              background: "#100d0d",
              justifyContent: "space-between",
            }}
          >
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
                  <NavLink to="/services" className="nav-item nav-link">
                    <FormattedMessage {...messages.navBarListThree} />
                  </NavLink>
                  <NavLink to="/projects" className="nav-item nav-link">
                    <FormattedMessage {...messages.navBarListFour} />
                  </NavLink>

                  <button
                    to="Связаться с нами"
                    className="nav-item nav-link"
                    onClick={onContactClick}
                  >
                    <FormattedMessage {...messages.navBarListSix} />
                  </button>

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
                    <div className="dropdown-menu dropMenus">
                      <NavLink to="/forBuilders" className="dropdown-item">
                        <FormattedMessage {...messages.navBarListFive1} />
                      </NavLink>
                      <NavLink
                        to="/forFurnitureStores"
                        className="dropdown-item"
                      >
                        <FormattedMessage {...messages.navBarListFive2} />
                      </NavLink>
                      <NavLink to="/businessIdeas" className="dropdown-item">
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
                </div>
              </div>
            </nav>

            <div className="languageToggle">
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
              <div className={`modalContainer ${isOpen ? "open" : ""}`}>
                <div className="modalContent">
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
        </div>
      </div>
    </div>
  );
};
