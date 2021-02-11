import React, { useState } from "react";
import "./Navbar.scss";
import LogoWText from "../../svgs/logoWText.svg";
import IconHamburger from "../../svgs/hamburger-menu-grey.svg";
import IconCross from "../../svgs/cross.svg";
import Navbar__Dropdown from "../Navbar__Dropdown";

function Navbar({ signIn }) {
  const [hamburger, setHamburger] = useState(false);
  const [icon, setIcon] = useState(IconHamburger);

  const handleClick = () => {
    if (hamburger === false) {
      setHamburger(true);
      setIcon(IconCross);
    } else {
      setHamburger(false);
      setIcon(IconHamburger);
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <img className="container__logo" src={LogoWText} alt="" />
          <img
            className="container__hamburger"
            onClick={handleClick}
            src={icon}
            alt=""
          />
        </div>
      </div>
      <Navbar__Dropdown signIn={signIn} hamburger={hamburger} />
    </>
  );
}

export default Navbar;
