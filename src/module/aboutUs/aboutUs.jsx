import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img4 from "./img/23.png";
import img5 from "./img/49.png";
import img6 from "./img/50.png";
import img7 from "./img/51.png";
import img8 from "./img/52.png";

import "./styles.css";
import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
function CustomPrev(props) {
  const { style, onClick, isClicked, setActiveButton } = props;

  const handleClick = () => {
    setActiveButton("prev");
    onClick();
    // setTimeout(() => setActiveButton(null), 3000);
  };
  return (
    <div
      className={`blogPrevCarousel ${isClicked ? "active" : ""}`}
      style={{
        ...style,
        width: 60,
        height: 60,
        background: "white",
        color: "white",
        position: "relative",
        zIndex: 2,
        top: 559,
        left: 660,
        fontSize: 26,
      }}
      onClick={handleClick}
    >
      <div className="prevButton"></div>
    </div>
  );
}

function CustomNext(props) {
  const { style, onClick, isClicked, setActiveButton } = props;

  const handleClick = () => {
    setActiveButton("next");
    onClick();
    // setTimeout(() => setActiveButton(null), 3000);
  };
  return (
    <div
      className={`blogNextCarousel ${isClicked ? "active" : ""}`}
      style={{
        ...style,
        width: 60,
        height: 60,
        background: "black",
        position: "relative",
        zIndex: 2,
        top: 50,
        left: 600,
        fontSize: 26,
        color: "white",
      }}
      onClick={handleClick}
    >
      <div className="nextButton"></div>
    </div>
  );
}

export const AboutUs = () => {
  const aboutInfoBoxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const [activeButton, setActiveButton] = useState(null);
  const paragraphs = [
    <FormattedMessage {...messages.oNasButtonOneParagraph} />,

    <FormattedMessage {...messages.oNasButtonTwoParagraph} />,

    <FormattedMessage {...messages.oNasButtonThereParagraph} />,
  ];
  const slidesOne = [
    {
      description: <FormattedMessage {...messages.chooseCardOne} />,
      image: img5,
    },
    {
      description: <FormattedMessage {...messages.chooseCardOneTwo} />,

      image: img6,
    },
    {
      title: "Цифровизируйте Вашу Идею",
      descriptionTitle: "ArchiTek Soft",
      description: <FormattedMessage {...messages.chooseCardOneThere} />,

      image: img7,
    },
    {
      title: "Цифровизируйте Вашу Идею",
      descriptionTitle: "ArchiTek Soft",
      description: <FormattedMessage {...messages.chooseCardOneFoure} />,

      image: img8,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (aboutInfoBoxRef.current) {
      observer.observe(aboutInfoBoxRef.current);
    }

    return () => {
      if (aboutInfoBoxRef.current) {
        observer.unobserve(aboutInfoBoxRef.current);
      }
    };
  }, []);
  return (
    <div className="aboutUsContainer">
      <div className="about-container">
        <div className="about-left">
          <div
            className={`aboutInfoBox ${isVisible ? "visible" : ""}`}
            ref={aboutInfoBoxRef}
          >
            <h3>
              <FormattedMessage {...messages.oNasTitle} />
            </h3>
            <h1>
              <FormattedMessage {...messages.oNasTitleOne} />
            </h1>
            <p>
              <FormattedMessage {...messages.oNasTitleTwo} />
            </p>
            <div className="buttonGroup">
              <div
                className={`button ${activeButtonIndex === 1 ? "active" : ""}`}
                onClick={() => setActiveButtonIndex(1)}
              >
                <FormattedMessage {...messages.oNasButtonOne} />
                <div className="buttonTitle"> </div>
              </div>
              <div
                className={`button ${activeButtonIndex === 2 ? "active" : ""}`}
                onClick={() => setActiveButtonIndex(2)}
              >
                <FormattedMessage {...messages.oNasButtonTwo} />
                <div className="buttonTitle"> </div>
              </div>
              <div
                className={`button ${activeButtonIndex === 3 ? "active" : ""}`}
                onClick={() => setActiveButtonIndex(3)}
              >
                <FormattedMessage {...messages.oNasButtonThere} />
                <div className="buttonTitle"> </div>
              </div>
            </div>
            <div className="linel"></div>
            <div className="aboutInfo">
              <p>{paragraphs[activeButtonIndex - 1]}</p>
            </div>
            <div className="linel"></div>
            {/* <div className="buttonMakeAppointment">
                     <div className="buttonTitle">Make Appointment</div>
                   </div> */}
          </div>
          <img
            src={img4}
            alt="Robots"
            className={`robot-image ${isVisible ? "visible" : ""}`}
          />
        </div>
      </div>

      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h1 className="display-4 mb-4">
              {" "}
              <FormattedMessage {...messages.chooseTitle} />
            </h1>
          </div>
          <Slider
            {...{
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              prevArrow: (
                <CustomPrev
                  isClicked={activeButton === "prev"}
                  setActiveButton={setActiveButton}
                />
              ),
              nextArrow: (
                <CustomNext
                  isClicked={activeButton === "next"}
                  setActiveButton={setActiveButton}
                />
              ),
            }}
          >
            {slidesOne.map((slide, index) => (
              <div
                className="blog-item wow fadeInUp"
                data-wow-delay="0.2s"
                key={index}
              >
                <div className="blog-img p-4 pb-0">
                  <NavLink to="#">
                    <img src={slide.image} className="img-fluid w-100" alt="" />
                  </NavLink>
                </div>
                <div className="blog-content p-4">
                  <p className="paragraph">{slide.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
