import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import logo from "./img/ArchiTek_logo.png";

import { NavLink } from "react-router-dom";
export const NavBar = ({ onContactClick }) => {
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
                      example@gmail.com
                    </NavLink>
                  </div>
                  <div className="pe-0">
                    <NavLink to="#" className="text-muted small">
                      <i className="fa fa-clock text-primary me-2"></i>Mon -
                      Sat: 8.00 am-7.00 pm
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
                    Главная
                  </NavLink>
                  <NavLink to="/aboutUs" className="nav-item nav-link">
                    О нас
                  </NavLink>
                  <NavLink to="/uslogi" className="nav-item nav-link">
                    Услуги
                  </NavLink>
                  <NavLink to="/Проекты" className="nav-item nav-link">
                    Проекты
                  </NavLink>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="dropdown-toggle">Страницы</span>
                    </NavLink>
                    <div className="dropdown-menu">
                      <NavLink to="/showJob" className="dropdown-item">
                        Решения для застройщиков
                      </NavLink>
                      <NavLink to="/showJobOne" className="dropdown-item">
                        Решения для мебельных магазинов
                      </NavLink>
                      <NavLink to="/workUs" className="dropdown-item">
                        Новые бизнес-идеи
                      </NavLink>
                      <NavLink
                        to="https://store.steampowered.com/app/2439730/BossHunter_VR/"
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        О игре BossHunter
                      </NavLink>
                    </div>
                  </div>
                  <button
                    to="Связаться с нами"
                    className="nav-item nav-link"
                    onClick={onContactClick}
                  >
                    Связаться с нами
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
