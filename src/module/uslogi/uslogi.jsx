import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles.css";
import { Footer } from "../../UI/footer/footer";

export const Uslogi = () => {
  const uslogiRef = useRef(null);
  const [isVisibleUslogi, setIsVisibleUslogi] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleUslogi(true);
        }
      },
      {
        threshold: 0.5,
      }
    );
    if (uslogiRef.current) {
      observer.observe(uslogiRef.current);
    }
    return () => {
      if (uslogiRef.current) {
        observer.unobserve(uslogiRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="uslogiContainer">
        <div className="uslogiContainerBox">
          <div
            // className={"uslogiInfo"}
            className={`uslogiInfo ${isVisibleUslogi ? "visibleUslogi" : ""}`}
            ref={uslogiRef}
          >
            <h1>Услуги</h1>
            <h2>Цифровые решения для всех</h2>
            <div className="uslogiList">
              <h4>Визуализация недвижимости</h4>
              <ul>
                <li>
                  Динамичные виртуальные эксперименты с изменением сезонов,
                  времени суток и освещения.
                </li>
                <li>
                  Полное изучение ориентации квартиры (север-юг) и её
                  планировки.
                </li>
                <li>
                  {" "}
                  Возможности изменения дизайна и расположения мебели в реальном
                  времени.
                </li>
                <li>
                  Многофункциональные программные решения для компьютеров и
                  других устройств.
                </li>
              </ul>
              <h4> Для мебельных магазинов</h4>
              <ul>
                <li>
                  Интерактивные 3D-дизайны с настройкой цветов и размеров.
                </li>
                <li>
                  Демонстрация и адаптация различных предметов мебели по
                  предпочтениям клиента.
                </li>
                <li>
                  Инструмент виртуального размещения для визуализации мебели в
                  пространстве клиента.
                </li>
              </ul>
              <h4>Индивидуальные решения</h4>
              <ul>
                <li>
                  Цифровые решения для любых целей, от приложений до
                  бизнес-инструментов.
                </li>
                <li>
                  Виртуальные эксперименты и интерактивные программы,
                  совместимые со всеми устройствами.
                </li>
                <li>
                  Инновационное программное обеспечение для реализации любых
                  идей.
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`uslogiImgOne ${isVisibleUslogi ? "visibleUslogi" : ""}`}
          ></div>
        </div>
      </div>
      <div className="uslogiFooter">{/* <Footer /> */}</div>
    </>
  );
};
