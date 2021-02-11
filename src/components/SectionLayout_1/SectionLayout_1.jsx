import React from "react";
import "./SectionLayout_1.scss";

import { HeaderText } from "../HeaderText/HeaderText";
import { Button } from "../Button/Button";

function SectionLayout_1({
  headline,
  headline_style,
  headline_size,
  headline_color,
  description,
  image,
  logo,
  button_text,
  button_style,
  button_size,
}) {
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
              headerTextSize={headline_size}
              headerTextColor={headline_color}
            />
            <p>{description}</p>
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
