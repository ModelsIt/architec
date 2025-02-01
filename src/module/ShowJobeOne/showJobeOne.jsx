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
import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
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
            <h1 className="showJobsTitle">
              <FormattedMessage {...messages.showBildindOneTitle} />
            </h1>

            <div className="showJobParagraphBox">
              <h3 className="showJobsTitleOne">
                <FormattedMessage {...messages.showBildindOneTitleOne} />
              </h3>
              <ul className="showJobsList">
                <li>
                  <FormattedMessage {...messages.showBildindOneListOne} />
                </li>
                <li>
                  <FormattedMessage {...messages.showBildindOneListTwo} />
                </li>
                <li>
                  <FormattedMessage {...messages.showBildindOneListThree} />
                </li>
              </ul>
              <div className="showJobsTitleOne">
                <h3 className="showJobsTitleTwo">
                  <FormattedMessage {...messages.showBildindOneTitleTwo} />
                </h3>
                <p className="showJobsParagraph">
                  <FormattedMessage {...messages.showBildindOneParagraph} />
                </p>
              </div>
            </div>
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

        {/* <Footer /> */}
      </div>

      <div width="100%" style={{ marginBottom: "-6px" }}>
        <iframe
          className="blokNone"
          src="https://staging.d1gubevygh3b3w.amplifyapp.com/"
          frameborder="0"
          width={"100%"}
          height={"600px"}
          allow="fullscreen"
        ></iframe>
      </div>
    </>
  );
};
