import React, { useState } from "react";
import "./SectionLayout_1.scss";

import { HeaderText } from "../HeaderText/HeaderText";
import { Button } from "../Button/Button";

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
  return (
    <>
      <div className="SectionLayout_1">
        <div className="SectionLayout_1__container">
          <div className="container__section-img-wrapper">
            <img className="row__image" src={image} alt="" />
          </div>
          <div className="container__section-text-wrapper">
            <img src={logo} alt="" />
            <HeaderText
              headerText={headline}
              headerTextStyle={headline_style}
              headerTextSize={`headerText--${headingSize}`}
              headerTextColor={headline_color}
            />
            <p>{para_1}</p>
            <p>{para_2}</p>
            <Button
              buttonText={button_text}
              buttonStyle={button_style}
              buttonSize={button_size}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionLayout_1;
