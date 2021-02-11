import React from "react";
import { Button } from "../../components/Button/Button";
import { HeaderText } from "../../components/HeaderText/HeaderText";
import Navbar from "../../components/Navbar/Navbar";
import "./QueueSignup.scss";

function QueueSignup({ signIn, signOut, queueData }) {
  return (
    <>
      <Navbar signIn={signIn} />
      <div className="queueSignup">
        <div className="queueSignup__container">
          <HeaderText
            headerText="WELCOME, WE ARE PROCESSING YOU NOW"
            headerTextStyle="headerText--primary"
            headerTextSize="headerText--medium"
            headerTextColor="headerText--white"
          />
          <HeaderText
            headerText="Your Number In The Queue:"
            headerTextStyle="headerText--primary"
            headerTextSize="headerText--small"
            headerTextColor="headerText--pink"
          />
          <p>{queueData.number_users_in_queue}</p>
          <HeaderText
            headerText="Guests Already Registered:"
            headerTextStyle="headerText--primary"
            headerTextSize="headerText--small"
            headerTextColor="headerText--pink"
          />
          <p>{queueData.number_users_currently_registered}</p>
          <p>Please Wait</p>
          <Button
            buttonText="Logout"
            buttonStyle="button--primary-pink"
            buttonSize="button-medium"
            onClick={signOut}
          />
        </div>
      </div>
    </>
  );
}

export default QueueSignup;
