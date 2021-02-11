import React, { useEffect, useState } from "react";
import "./SectionLayout_1.scss";

import { HeaderText } from "../HeaderText/HeaderText";
import { Button } from "../Button/Button";

import Aos from "aos";
import "aos/dist/aos.css";

function SectionLayout_1({
  headline,
  headline_style,
  headline_size,
  headline_color,
  para_1,
  para_2,
  image,
  logo,
  button_text,
  button_style,
  button_size,
}) {
  const [headingSize, setHeadingSize] = useState("");

  const controlHeadingSize = () => {
    if (window.innerWidth <= 768) {
      setHeadingSize("small");
    } else {
      setHeadingSize("medium");
    }
  };
  window.addEventListener("resize", controlHeadingSize);

  useState(() => {
    if (window.innerWidth <= 768) {
      setHeadingSize("small");
    } else {
      setHeadingSize("medium");
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="SectionLayout_1">
        <div className="SectionLayout_1__container">
          <div className="container__section-img-wrapper">
            <img className="row__image" src={image} alt="" />
          </div>
          <div className="container__section-text-wrapper">
            <img data-aos="fade-up" src={logo} alt="" />
            <HeaderText
              headerText={headline}
              headerTextStyle={headline_style}
              headerTextSize={`headerText--${headingSize}`}
              headerTextColor={headline_color}
              headerTextTransition="fade-up"
            />
            <p data-aos="fade-up">{para_1}</p>
            <p data-aos="fade-up">{para_2}</p>
            <Button
              buttonText={button_text}
              buttonStyle={button_style}
              buttonSize={button_size}
              buttonTransition="fade-up"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionLayout_1;
