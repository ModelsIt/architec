import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "./styles.css";
import { Footer } from "../../UI/footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import portfolImgOne from "./img/portfolImgOne.png";
import portfolImgTwo from "./img/portfolImgTwo.png";
import portfolImgThree from "./img/portfolImgThree.png";
import portfoliImgThour from "./img/portfoliImgThour.png";

import { NavLink } from "react-router-dom";
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
export const Portfel = () => {
  const featureRefs = useRef([]);
  const [visibleFeaturesBool, setVisibleFeaturesBool] = useState(false);
  const features = [
    {
      id: 1,
      title: "Work Your Butt Off",
      text: "BossHunter VR - это первая версия игры, в которой игрокам предстоит сразиться с множеством интересных противников, использовать несколько видов оружия и уникальную в своем роде механику, когда игрок напрямую командует",
      imgSrc: portfolImgOne,
      delay: "0.2s",
      to: "https://store.steampowered.com/app/2439730/BossHunter_VR/",
      target: "_blank",
    },
    {
      id: 2,
      title: "Get In The Groove",
      text: "Динамичный опыт для изучения строящихся зданий, типовых квартир и окружающей территории, включая возможность просмотра с помощью VR-очков.",
      imgSrc: portfolImgTwo,
      delay: "0.4s",
      delay: "0.4s",
      to: "/showJob",
      target: "_self",
    },
    {
      id: 3,
      title: "It's More Than A Game",
      text: "Динамичная программа для дизайна мебели с возможностью изучения различных моделей и цветов, открытия ящиков и заказа индивидуальных решений через виртуальную реальность (VR).",
      imgSrc: portfolImgThree,
      delay: "0.6s",
      to: "/showJobOne",
      target: "_self",
    },
    {
      id: 4,
      title: "It's More Than A Game",
      text: "Комплексные программные решения для всех отраслей — от бизнес-инструментов до инновационных игр и приложений, адаптированных под ваши потребности и цели.",
      imgSrc: portfoliImgThour,
      delay: "0.6s",
      to: "/workUs",
      target: "_self",
    },
  ];
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
    };
  }, []);
  return (
    <div className="portfelContainer">
      <div className="container-fluid feature bg-light py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="text-primary"> портфель</h1>
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
                autoplay: true,
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
