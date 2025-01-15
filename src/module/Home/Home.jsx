import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../UI/footer/footer";
import "./styles.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/23.png";

import img5 from "./img/49.png";
import img6 from "./img/50.png";
import img7 from "./img/51.png";
import img8 from "./img/52.png";

import uslogiImgOne from "./img/uslogiImgOne.png";

import portfolImgOne from "./img/portfolImgOne.png";
import portfolImgTwo from "./img/portfolImgTwo.png";
import portfolImgThree from "./img/portfolImgThree.png";
import portfoliImgThour from "./img/portfoliImgThour.png";

import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
function CustomPrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-prev"
      style={{
        ...style,
        width: 60,
        height: 60,
        // position: "absolute",
        background: "white",
        color: "white",
        zIndex: 333,
        // top: 779,
        left: 855,
        fontSize: 26,
      }}
      onClick={onClick}
    >
      {/* <FontAwesomeIcon icon={faArrowLeft} className="faArrowLeft" /> */}

      <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
    </div>
  );
}

function CustomNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-next"
      style={{
        ...style,
        width: 60,
        height: 60,
        background: "black",
        zIndex: 2,
        // top: 779,
        // right: 900,
        fontSize: 26,
        color: "white",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="faArrowLeft" />
      {/* <FontAwesomeIcon icon={faArrowRight} className="arrowRight" /> */}
    </div>
  );
}

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

function CustomPrevButton(props) {
  const { style, onClick } = props;
  return (
    <div className="slickPrev" onClick={onClick}>
      {/* <FontAwesomeIcon icon={faArrowRight} className="arrowRight" /> */}

      <FontAwesomeIcon icon={faArrowLeft} className="faArrowLeft" />
    </div>
  );
}

function CustomNextButton(props) {
  const { style, onClick } = props;
  return (
    <div className="slickNext" onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
    </div>
  );
}
export const Home = () => {
  const slides = [
    {
      title: <FormattedMessage {...messages.homePageCourseTitle} />,
      // descriptionTitle: "ArchiTek Soft",
      description: <FormattedMessage {...messages.homePageCourseParagraph} />,
      image: img1,
    },
    {
      title: <FormattedMessage {...messages.homePageCourseTitle} />,
      // descriptionTitle: "ArchiTek Soft",
      description: <FormattedMessage {...messages.homePageCourseParagraph} />,
      image: img2,
    },
    {
      title: <FormattedMessage {...messages.homePageCourseTitle} />,
      // descriptionTitle: "ArchiTek Soft",
      description: <FormattedMessage {...messages.homePageCourseParagraph} />,
      image: img3,
    },
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

  const paragraphs = [
    <FormattedMessage {...messages.oNasButtonOneParagraph} />,

    <FormattedMessage {...messages.oNasButtonTwoParagraph} />,

    <FormattedMessage {...messages.oNasButtonThereParagraph} />,
  ];
  const features = [
    {
      id: 1,
      title: "Work Your Butt Off",
      text: <FormattedMessage {...messages.projectsCardPharagrapOne} />,
      imgSrc: portfolImgOne,
      delay: "0.2s",
      to: "https://store.steampowered.com/app/2439730/BossHunter_VR/",
      target: "_blank",
    },
    {
      id: 2,
      title: "Get In The Groove",
      text: <FormattedMessage {...messages.projectsCardPharagrapThou} />,
      imgSrc: portfolImgTwo,
      delay: "0.4s",
      to: "/showJob",
      target: "_self",
    },
    {
      id: 3,
      title: "It's More Than A Game",
      text: <FormattedMessage {...messages.projectsCardPharagrapThree} />,

      imgSrc: portfolImgThree,
      delay: "0.6s",
      to: "/showJobOne",
      target: "_self",
    },
    {
      id: 4,
      title: "It's More Than A Game",
      text: <FormattedMessage {...messages.projectsCardPharagrapFoure} />,

      imgSrc: portfoliImgThour,
      delay: "0.6s",
      to: "/workUs",
      target: "_self",
    },
  ];

  // const [visibleFeatures, setVisibleFeatures] = useState([]);

  const [visibleFeaturesBool, setVisibleFeaturesBool] = useState(false);
  const featureRefs = useRef([]);

  // useEffect(() => {
  //   const featureItems = document.querySelectorAll(".feature-item");
  //   featureItems.forEach((item) => {
  //     const rect = item.getBoundingClientRect();
  //     if (rect.top <= window.innerHeight * 0.75) {
  //       const id = item.getAttribute("data-id");
  //       if (!visibleFeatures.includes(parseInt(id))) {
  //         setVisibleFeatures((prev) => [...prev, parseInt(id)]);
  //       }
  //     }
  //   });
  // }, [visibleFeatures]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleFeaturesBool(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    // features.forEach((feature, index) => {
    //   // setTimeout(() => {
    //   setVisibleFeatures((prev) => [...prev, feature.id]);
    //   // }, index * 500);
    // });
    if (featureRefs.current) {
      observer.observe(featureRefs.current);
    }
    return () => {
      if (featureRefs.current) {
        observer.unobserve(featureRefs.current);
      }
      // clearTimeout();
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const [activeButton, setActiveButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleUslogi, setIsVisibleUslogi] = useState(false);
  const aboutInfoBoxRef = useRef(null);
  const uslogiRef = useRef(null);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    fade: true,
  };
  return (
    <div>
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <div className="carousel-content">
                <div className="text-content">
                  <h1 className="title">{slide.title}</h1>
                  <div className="paragraphContainer">
                    <p className="descriptionTitle">{slide.descriptionTitle}</p>
                    <p className="description">{slide.description}</p>
                  </div>
                </div>
                <div
                  className={`image-content ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

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

      <div className="uslogiContainer">
        <div
          // className={"uslogiInfo"}
          className={`uslogiInfo ${isVisibleUslogi ? "visibleUslogi" : ""}`}
          ref={uslogiRef}
        >
          <h1>
            <FormattedMessage {...messages.uslogiTitle} />
          </h1>
          <h2>
            <FormattedMessage {...messages.uslogiTitleOne} />
          </h2>
          <div className="uslogiList">
            <h4>
              {" "}
              <FormattedMessage {...messages.uslogiLisTitleOne} />
            </h4>
            <ul>
              <li>
                <FormattedMessage {...messages.uslogiLisOne} />
              </li>
              <li>
                <FormattedMessage {...messages.uslogiLisTwo} />
              </li>
              <li>
                <FormattedMessage {...messages.uslogiLisThree} />
              </li>
              <li>
                <FormattedMessage {...messages.uslogiLisFhree} />
              </li>
            </ul>
            <h4>
              {" "}
              <FormattedMessage {...messages.uslogiLisTitleTwo} />
            </h4>
            <ul>
              <li>
                {" "}
                <FormattedMessage {...messages.uslogiLisFive} />
              </li>
              <li>
                <FormattedMessage {...messages.uslogiLisSix} />
              </li>
              <li>
                <FormattedMessage {...messages.uslogiLisSeven} />
              </li>
            </ul>
            <h4>
              {" "}
              <FormattedMessage {...messages.uslogiLisTitleThree} />
            </h4>
            <ul>
              <li>
                <FormattedMessage {...messages.uslogiLisEight} />
              </li>
              <li>
                <FormattedMessage {...messages.uslogiLisNine} />
              </li>
              <li>
                <FormattedMessage {...messages.uslogiLisThen} />
              </li>
            </ul>
          </div>
        </div>
        {/* <div> */}
        <div
          className={`uslogiImgOne ${isVisibleUslogi ? "visibleUslogi" : ""}`}
        ></div>
        {/* </div> */}
      </div>

      <div className="container-fluid feature bg-light py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="text-primary">
              {" "}
              <FormattedMessage {...messages.projectsTitle} />
            </h1>
          </div>

          <div
            className="feature-carousel owl-carousel featureCarouselContainer "
            ref={featureRefs}
          >
            <Slider
              {...{
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                prevArrow: <CustomPrevButton />,
                nextArrow: <CustomNextButton />,
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`feature-item ${
                    visibleFeaturesBool ? "fade-in" : ""
                  }`}
                  data-wow-delay={feature.delay}
                >
                  <div className="feature-img">
                    <img
                      src={feature.imgSrc}
                      className="img-fluid w-100"
                      alt={feature.title}
                    />
                  </div>
                  <div className="feature-content p-4">
                    <p className="portfolioCardParagraf">{feature.text}</p>
                    <NavLink
                      to={feature.to}
                      target={feature.target}
                      className="btn btn-primary py-2 px-4 buttonReadMore "
                    >
                      <span>Read More</span>
                    </NavLink>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="feature-shaps"></div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
