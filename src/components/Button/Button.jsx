import React from "react";
import "./Button.scss";

const STYLES = [
  "button--primary-pink",
  "button--primary-purple",
  "button--primary-orange",
  "button--outline-pink",
  "button--outline-purple",
  "button--outline-orange",
  "button--basic--white",
];

const SIZES = ["button--small", "button--medium", "button--Large"];

export const Button = ({
  buttonText,
  buttonStyle,
  buttonSize,
  onClick,
  buttonTransition,
}) => {
  const checkHeaderStyle = STYLES.includes(buttonStyle) ? buttonStyle : null;
  const checkHeaderSize = SIZES.includes(buttonSize) ? buttonSize : null;

  return (
    <button
      className={`button ${checkHeaderStyle} ${checkHeaderSize}`}
      onClick={onClick}
      data-aos={buttonTransition}
    >
      {buttonText}
    </button>
  );
};
