import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles.css";
import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
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
          <div
            className={`uslogiImgOne ${isVisibleUslogi ? "visibleUslogi" : ""}`}
          ></div>
        </div>
      </div>
      <div className="uslogiFooter">{/* <Footer /> */}</div>
    </>
  );
};
