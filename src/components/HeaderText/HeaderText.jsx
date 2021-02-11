import React from "react";
import "./HeaderText.scss";

const STYLES = ["headerText--primary", "headerText--underline"];

const SIZES = [
  "headerText--xsmall",
  "headerText--small",
  "headerText--medium",
  "headerText--large",
];

const COLOR = [
  "headerText--white",
  "headerText--pink",
  "headerText--purple",
  "headerText--orange",
];

export const HeaderText = ({
  headerText,
  headerTextStyle,
  headerTextSize,
  headerTextColor,
}) => {
  const checkHeaderStyle = STYLES.includes(headerTextStyle)
    ? headerTextStyle
    : null;
  const checkHeaderSize = SIZES.includes(headerTextSize)
    ? headerTextSize
    : null;
  const checkHeaderColor = COLOR.includes(headerTextColor)
    ? headerTextColor
    : null;

  return (
    <h2
      className={`headerText ${checkHeaderStyle} ${checkHeaderSize} ${checkHeaderColor}`}
    >
      {headerText}
    </h2>
  );
};
