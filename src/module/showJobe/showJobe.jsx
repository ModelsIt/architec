import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import { Footer } from "../../UI/footer/footer";
import home from "./img/1.png";
import home1 from "./img/2.png";
import home2 from "./img/Group 6501.png";
import home3 from "./img/Group 6502.png";
import home4 from "./img/Img_3.png";
import home5 from "./img/Img_4.png";
import home6 from "./img/Img_5.png";
import home7 from "./img/Img_6.png";
import home8 from "./img/Img_7.png";
import home9 from "./img/Img_8.png";
import home10 from "./img/Img_9-1.png";
import home11 from "./img/Img_9.png";
export const ShowJob = () => {
  const images = [
    { src: home3, alt: "", className: "tall imgCenter", isVertical: true },
    { src: home2, alt: "", className: "wide" },
    { src: home, alt: "", className: "tall imgCenter", isVertical: true },
    { src: home1, alt: "", className: "tall imgCenter", isVertical: true },
    { src: home4, alt: "" },
    { src: home5, alt: "" },
    { src: home7, alt: "" },
    { src: home8, alt: "" },
    { src: home9, alt: "" },
    { src: home6, alt: "wide" },
    { src: home10, alt: "" },
    { src: home11, alt: "wide" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentImageIndex(null);
  };

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      <div className="showWorkContainer">
        <div className="pageContainer">
          <div className="textSection">
            <p>
              Программа предоставляет полное представление о местоположении,
              внешнем виде и окружении строящихся зданий, учитывая время суток,
              сезоны и погодные условия — от солнечных дней до тумана, дождя и
              снега. Пользователи могут исследовать двор как от первого лица,
              так и в формате игры на компьютере, что делает опыт интересным как
              для родителей, так и для детей. Изучение квартир включает
              информацию о размерах и планировке типовых квартир, возможность
              перестановки и изменения цвета мебели, а также обзор видов с
              балкона. Все эти функции доступны и с использованием VR-очков, что
              обеспечивает более реалистичное и захватывающее погружение.
            </p>
            <ul>
              <li>Преимущества решения</li>
            </ul>

            <p>
              Наше решение позволяет детально изучить строящееся здание, его
              окрестности и квартиры, обеспечивая полное понимание и уверенность
              в процессе принятия решений.
            </p>
          </div>
          <div className="videoSection">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aU1LRJtRAfg?si=Yxxnx4UAuFY9rCAj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="videoBuilding"
            ></iframe>
          </div>
          <div className="gallery">
            {images.map((image, index) => (
              <div
                className={`galleryItem ${image.className || ""}`}
                key={index}
                onClick={() => handleImageClick(index)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
        {currentImageIndex !== null && (
          <div className="modas" onClick={handleCloseModal}>
            <div
              className={`modal-content ${
                images[currentImageIndex].isVertical === true
                  ? "vertical-image"
                  : "horizontal-image"
              }`}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="prev-btn"
              >
                &#10094;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="next-btn"
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
      <div width="100%" style={{ marginBottom: "-6px" }}>
        <iframe
          // src="http://127.0.0.1:5500"
          src="https://staging.d1hcassa9t972v.amplifyapp.com"
          frameborder="0"
          width={"100%"}
          height={"600px"}
          allow="fullscreen"
        ></iframe>
      </div>
    </>
  );
};
