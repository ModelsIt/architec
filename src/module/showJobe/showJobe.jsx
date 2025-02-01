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

import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
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
            <h1 className="showJobsTitle">
              <FormattedMessage {...messages.showBildindTitle} />
            </h1>
            <div className="showJobParagraphBox">
              <h3 className="showJobsTitleOne">
                <FormattedMessage {...messages.showBildindTitleOne} />
              </h3>
              <ul className="showJobsList">
                <li>
                  <FormattedMessage {...messages.showBildindListOne} />
                </li>
                <li>
                  <FormattedMessage {...messages.showBildindListTwo} />
                </li>
                <li>
                  <FormattedMessage {...messages.showBildindListThree} />
                </li>
                <li>
                  <FormattedMessage {...messages.showBildindListFoure} />
                </li>
                <li>
                  <FormattedMessage {...messages.showBildindListFive} />
                </li>
              </ul>
              <div className="showJobsTitleOne">
                <h3 className="showJobsTitleTwo">
                  <FormattedMessage {...messages.showBildindTitleTwo} />
                </h3>
                <p className="showJobsParagraph">
                  <FormattedMessage {...messages.showBildindParagraph} />
                </p>
              </div>
            </div>
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

        {/* {currentImageIndex !== null && (
        <div className="modas" onClick={handleCloseModal}>
          <div className="modal-content">
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
      )} */}
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
      <div width="100%" style={{ marginBottom: "-6px" }} className="blokNone">
        <iframe
          src="https://staging.d1ss4lkbf31qbd.amplifyapp.com/"
          frameborder="0"
          width={"100%"}
          height={"600px"}
          allow="fullscreen"
        ></iframe>
      </div>
    </>
  );
};
