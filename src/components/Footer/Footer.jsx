import React from "react";
import "./Footer.scss";
import { HeaderText } from "../HeaderText/HeaderText";
import { Button } from "../Button/Button";

import ImageAppStore from "../../svgs/appStore.svg";
import ImageAndroid from "../../svgs/android.svg";
import ImageInstagram from "../../svgs/instagram-purple.svg";
import ImageFacebook from "../../svgs/facebook-purple.svg";
import ImageTwitter from "../../svgs/twitter-purple.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="container__text-wrapper">
            <HeaderText
              headerText="PAGES"
              headerTextStyle="headerText--primary"
              headerTextSize="headerText--small"
              headerTextColor="headerText--orange"
            />
            <ul>
              <li>Home</li>
              <li>How it works</li>
              <li>Dating tips</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="container__text-wrapper">
            <HeaderText
              headerText="CONTACT"
              headerTextStyle="headerText--primary"
              headerTextSize="headerText--small"
              headerTextColor="headerText--orange"
            />
            <ul>
              <li>Hello@thepom.co</li>
              <li>partnerships@thepom.co</li>
            </ul>
          </div>
          <div className="container__text-wrapper">
            <HeaderText
              headerText="LEGAL"
              headerTextStyle="headerText--primary"
              headerTextSize="headerText--small"
              headerTextColor="headerText--orange"
            />
            <ul>
              <li>TnC's</li>
              <li>Private Policy</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className="container__text-wrapper">
            <HeaderText
              headerText="DOWNLOAD"
              headerTextStyle="headerText--primary"
              headerTextSize="headerText--small"
              headerTextColor="headerText--orange"
            />
            <ul>
              <li>Coming Soon On</li>
            </ul>
            <img
              className="text-wrapper__imageAppSore"
              src={ImageAppStore}
              alt=""
            />
            <img
              className="text-wrapper__imageAndroid"
              src={ImageAndroid}
              alt=""
            />
          </div>
          <hr />
          <div className="container__link-wrapper">
            <p>POM 2020</p>
            <Button
              buttonText="Manage Cookie Preferences"
              buttonStyle="button--basic--white"
              buttonSize="button-medium"
            />
            <div className="link-wrapper__social">
              <div className="instagram">
                <img src={ImageInstagram} alt="" />
              </div>
              <div className="facebook">
                <img src={ImageFacebook} alt="" />
              </div>
              <div className="twitter">
                <img src={ImageTwitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
