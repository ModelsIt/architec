import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import { Footer } from "../../UI/footer/footer";
import { FormattedMessage } from "react-intl";
import messages from "./messages.js";
export const WorkUs = () => {
  return (
    <div className="WorkUsContainer">
      <div className="textSection">
        <h1 className="showJobsTitle">
          <FormattedMessage {...messages.workUsTitle} />
        </h1>
        <h3 className="showJobsTitleOne">
          <FormattedMessage {...messages.workUsTitleOne} />
        </h3>
        <ul className="showJobsList">
          <li>
            <FormattedMessage {...messages.workUsListOne} />
          </li>
          <li>
            <FormattedMessage {...messages.workUsListTwo} />
          </li>
          <li>
            <FormattedMessage {...messages.workUseListThree} />
          </li>
          <li>
            <FormattedMessage {...messages.workUseListFoure} />
          </li>
        </ul>
        <div className="showJobsTitleOne">
          <h3 className="showJobsTitleTwo">
            <FormattedMessage {...messages.workUsTitleTwo} />
          </h3>
          <p className="showJobsParagraph">
            <FormattedMessage {...messages.workUsParagraph} />
          </p>
        </div>
      </div>

      <div className="WorkUsTwoContainer">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/KkmS2Rtb-mw?si=TYYRTbD7lPveX6ED"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="workUsParagraphBox">
          <h3>
            <FormattedMessage {...messages.workUsTitleBoxOne} />
          </h3>
          <p>
            <FormattedMessage {...messages.workUsParagraphBox} />
          </p>
        </div>
      </div>

      <div className="WorkUsThreeContainer">
        <div className="WorkUsThreeList">
          <h3>
            <FormattedMessage {...messages.workUsListTitleBox} />
          </h3>
          <ul>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxOne} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxTwo} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxThree} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxFour} />
            </li>
          </ul>
          <h3>
            <FormattedMessage {...messages.workUsListTitleBoxOne} />
          </h3>
          <ul>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxFive} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxSixe} />
            </li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/Ylp4fmtHA3Q?si=2BXXusVi_nSf_kHP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="video"
          ></iframe>
        </div>
      </div>
      <div className="WorkUsThorContainer">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/gQeFH_pFg0o?si=RIdFl-heyHgJRXcj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="WorkUsThorParagraphList">
          <h3>
            <FormattedMessage {...messages.workUsTitleBoxThree} />
          </h3>
          <p>
            <FormattedMessage {...messages.workUsParagraphBoxMR} />
          </p>

          <div className="WorkUsThreeList">
            <h3>
              <FormattedMessage {...messages.workUsListTitleBox} />
            </h3>
            <ul>
              <li>
                <FormattedMessage {...messages.workUsParagraphBoxMRList} />
              </li>
              <li>
                <FormattedMessage {...messages.workUsParagraphBoxMRListOne} />
              </li>
              <li>
                <FormattedMessage {...messages.workUsParagraphBoxMRListTwo} />
              </li>
              <li>
                <FormattedMessage {...messages.workUsParagraphBoxMRListThree} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="WorkUsFiveContainer">
        <h3>
          <FormattedMessage {...messages.workUsListTitleBoxOne} />
        </h3>
        <ul>
          <li>
            <FormattedMessage {...messages.workUsListParagraphBoxFive} />
          </li>
          <li>
            <FormattedMessage {...messages.workUsListParagraphBoxSixe} />
          </li>
          <li>
            <FormattedMessage {...messages.workUsListParagraphBoxSeven} />
          </li>
          <li>
            <FormattedMessage {...messages.workUsListParagraphBoxEight} />
          </li>
        </ul>
      </div>
      <div className="WorkUsSixContainer">
        <div className="vrParagraphBox">
          <h3>
            <FormattedMessage {...messages.workUsTitleBoxVRThree} />
          </h3>

          <p>
            <FormattedMessage {...messages.workUsParagraphBoxVR} />
          </p>
        </div>

        <iframe
          src="https://www.youtube.com/embed/xoK96tBQz7I?si=Ybr7EwS3yejY3TDW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>
      </div>

      <div className="WorkUsSevenContainer">
        <iframe
          src="https://www.youtube.com/embed/Z-P6w6BSiLg?si=_YMvABDnMrkubdkg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>
        <div>
          <h3>
            <FormattedMessage {...messages.workUsListTitleBox} />
          </h3>
          <ul>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxVRList} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxVRListOne} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxVRListTwo} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxVRListThree} />
            </li>
          </ul>

          <h3>
            <FormattedMessage {...messages.workUsListTitleBoxOne} />
          </h3>
          <ul>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxVRFive} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxVRSixe} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxVRSeven} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsListParagraphBoxVREight} />
            </li>
          </ul>
        </div>
      </div>
      <div className="WorkUsEightContainer">
        <div>
          <h3>
            <FormattedMessage {...messages.workUsTitleBoxPcThree} />
          </h3>
          <p>
            <FormattedMessage {...messages.workUsParagraphBoxPc} />
          </p>
          <ul>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxPcList} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxPcListOne} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxPcListTwo} />
            </li>
            <li>
              <FormattedMessage {...messages.workUsParagraphBoxPcListThree} />
            </li>
          </ul>
          <p>
            <FormattedMessage {...messages.workUsParagraphBoxPcLast} />
          </p>
        </div>

        <iframe
          src="https://www.youtube.com/embed/EC_JsJWSCSQ?si=HALVFvGv9W2EMSs9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
