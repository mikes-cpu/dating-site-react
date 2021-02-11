import React, { useState } from "react";
import { Button } from "../Button/Button";
import { HeaderText } from "../HeaderText/HeaderText";
import "./SectionLayout_2.scss";

function SectionLayout_2({
  headline,
  headline_style,
  headline_size,
  headline_color,
  video,
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
      <div className="sectionLayout_2">
        <div className="sectionLayout_2__container">
          <div className="container__section-text-wrapper">
            <HeaderText
              headerText={headline}
              headerTextStyle={headline_style}
              headerTextSize={`headerText--${headingSize}`}
              headerTextColor={headline_color}
            />
            <Button
              buttonText={button_text}
              buttonStyle={button_style}
              buttonSize={button_size}
            />
          </div>
          <div className="container__section-video-wrapper">
            <video autoPlay loop mute>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionLayout_2;
