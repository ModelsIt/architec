import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import { Footer } from "../../UI/footer/footer";
import home from "./img/bedroom_9_1_3d_model.png";
import home1 from "./img/bedroom_9_2_3d_model.png";
import home2 from "./img/bedroom_9_4_rend.png";
import home3 from "./img/Group 6501.png";
import home4 from "./img/Group 6502.png";
import home5 from "./img/Group 6503.png";
import home6 from "./img/Group 6504.png";
import home7 from "./img/Group 6505.png";
import home8 from "./img/Group 6506.png";
import home9 from "./img/Group 6511.png";
import home10 from "./img/Group 6508.png";
import home11 from "./img/Group 6510.png";
import home12 from "./img/living_room_1.png";
import home13 from "./img/Mask group.png";
export const ShowJobOne = () => {
  const images = [
    { src: home10, alt: "", className: "tall", isVertical: true },
    { src: home3, alt: "", className: "wide" },
    { src: home13, alt: "", className: "tall imgCenter", isVertical: true },
    { src: home11, alt: "", className: "tall imgCenter", isVertical: true },
    { src: home1, alt: "" },
    { src: home7, alt: "" },
    { src: home5, alt: "" }, //
    { src: home4, alt: "" },
    { src: home12, alt: "", className: "wide" },
    { src: home9, alt: "", className: "tall imgCenter" },
    { src: home6, alt: "wide" },
    { src: home2, alt: "wide" },
    { src: home, alt: "" },
    { src: home8, alt: "wide" },
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
              src="https://www.youtube.com/embed/iI1H2yt7FJk?si=h4cnnywj-X3i_rja"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="videoFurniture"
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
          src="https://staging.d1hcassa9t972v.amplifyapp.com/"
          frameborder="0"
          width={"100%"}
          height={"600px"}
          allow="fullscreen"
        ></iframe>
      </div>
    </>
  );
};
