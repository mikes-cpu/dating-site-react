import React from "react";
import { HeaderText } from "../../components/HeaderText/HeaderText";
import Navbar from "../../components/Navbar/Navbar";
import "./PleaseWait.scss";

function PleaseWait() {
  return (
    <>
      <Navbar />
      <div className="pleaseWait">
        <div className="pleaseWait__container">
          <HeaderText
            headerText="PLEASE WAIT.."
            headerTextStyle="headerText--primary"
            headerTextSize={`headerText--large`}
            headerTextColor="headerText--white"
            // headerTextTransition="fade-up"
          />
        </div>
      </div>
    </>
  );
}

export default PleaseWait;
