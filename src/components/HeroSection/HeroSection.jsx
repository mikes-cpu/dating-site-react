import React from "react";
import { HeaderText } from "../HeaderText/HeaderText";
import "./HeroSection.scss";
import useVH from "react-viewport-height";
import { Button } from "../Button/Button";

function HeroSection({ signIn }) {
  useVH();

  return (
    <>
      <div className="HeroSection">
        <div className="HeroSection__container">
          <HeaderText
            headerText="THE DATING APP FOR"
            headerTextStyle="headerText--primary"
            headerTextSize="headerText--large"
            headerTextColor="headerText--white"
          />
          <HeaderText />
          <HeaderText
            headerText="MUSIC LOVERS"
            headerTextStyle="headerText--underline"
            headerTextSize="headerText--large"
            headerTextColor="headerText--pink"
          />
          <HeaderText />
          <p>
            POM harnesses the Power of Music, channelling it into an exciting,
            new inclusive dating app.
          </p>
          <Button
            buttonText="Join The Queue"
            buttonStyle="button--primary-pink"
            buttonSize="button-medium"
            onClick={signIn}
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
