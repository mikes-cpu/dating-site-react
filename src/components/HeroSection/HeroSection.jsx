import React, { useEffect, useState } from "react";
import { HeaderText } from "../HeaderText/HeaderText";
import "./HeroSection.scss";
import useVH from "react-viewport-height";
import { Button } from "../Button/Button";

import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection({ signIn }) {
  useVH();

  const [headingSize, setHeadingSize] = useState("");

  const controlHeadingSize = () => {
    if (window.innerWidth <= 768) {
      setHeadingSize("medium");
    } else {
      setHeadingSize("large");
    }
  };
  window.addEventListener("resize", controlHeadingSize);

  useState(() => {
    if (window.innerWidth <= 768) {
      setHeadingSize("medium");
    } else {
      setHeadingSize("large");
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="HeroSection">
        <div className="HeroSection__container">
          <HeaderText
            headerText="THE DATING APP FOR"
            headerTextStyle="headerText--primary"
            headerTextSize={`headerText--${headingSize}`}
            headerTextColor="headerText--white"
            headerTextTransition="fade-up"
          />
          <HeaderText
            headerText="MUSIC LOVERS"
            headerTextStyle="headerText--underline"
            headerTextSize={`headerText--${headingSize}`}
            headerTextColor="headerText--pink"
            headerTextTransition="fade-up"
          />
          <p data-aos="fade-up">
            POM harnesses the Power of Music, channelling it into an exciting,
            new inclusive dating app.
          </p>
          <Button
            buttonText="Join The Queue"
            buttonStyle="button--primary-pink"
            buttonSize="button-medium"
            onClick={signIn}
            buttonTransition="fade-up"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
