import React, { useState } from "react";
import "./Navbar__Dropdown.scss";
import { HeaderText } from "../HeaderText/HeaderText";
import { Button } from "../Button/Button";

import IconAppStore from "../../svgs/appStore-pink.svg";
import IconAndroid from "../../svgs/android-pink.svg";
import IconInstagram from "../../svgs/instagram-white.svg";
import IconFacebook from "../../svgs/facebook-white.svg";
import IconTwitter from "../../svgs/twitter-white.svg";

function Navbar__Dropdown({ signIn, hamburger }) {
  const showHide = ["navbar__dropdown__container"];
  hamburger ? showHide.push("active") : showHide.push("hide");

  const [headingSize, setHeadingSize] = useState("");

  const controlHeadingSize = () => {
    if (window.innerWidth <= 768) {
      setHeadingSize("xsmall");
    } else {
      setHeadingSize("small");
    }
  };
  window.addEventListener("resize", controlHeadingSize);

  useState(() => {
    if (window.innerWidth <= 768) {
      setHeadingSize("xsmall");
    } else {
      setHeadingSize("small");
    }
  }, []);

  return (
    <>
      <div className="navbar__dropdown">
        <div className="navbar__dropdown__container">
          <div className={showHide.join(" ")}>
            <ul>
              <li>
                <HeaderText
                  headerText="HOME"
                  headerTextStyle="headerText--primary"
                  headerTextSize={`headerText--${headingSize}`}
                  headerTextColor="headerText--pink"
                />
              </li>
              <li>
                <HeaderText
                  headerText="HOW IT WORKS"
                  headerTextStyle="headerText--primary"
                  headerTextSize={`headerText--${headingSize}`}
                  headerTextColor="headerText--pink"
                />
              </li>
              <li>
                <HeaderText
                  headerText="DATING TIPS"
                  headerTextStyle="headerText--primary"
                  headerTextSize={`headerText--${headingSize}`}
                  headerTextColor="headerText--pink"
                />
              </li>
              <li>
                <HeaderText
                  headerText="CONTACT"
                  headerTextStyle="headerText--primary"
                  headerTextSize={`headerText--${headingSize}`}
                  headerTextColor="headerText--pink"
                />
              </li>
            </ul>

            <Button
              buttonText="Join The Queue"
              buttonStyle="button--outline-pink"
              buttonSize="button-medium"
              onClick={signIn}
            />

            <hr />
            <p>Coming soon on</p>
            <img className="androidLogo" src={IconAndroid} alt="" />
            <img className="appStoreLogo" src={IconAppStore} alt="" />
            <div className="container__links">
              <p>hello@thepom.co</p>
              <p>T n C's</p>
              <p>Privacy Policy</p>
            </div>
            <div className="container__social">
              <div className="instagram">
                <img src={IconInstagram} alt="" />
              </div>
              <div className="facebook">
                <img src={IconFacebook} alt="" />
              </div>
              <div className="twitter">
                <img src={IconTwitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar__Dropdown;
