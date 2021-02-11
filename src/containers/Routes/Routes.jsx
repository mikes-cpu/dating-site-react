import React, { useEffect, useState } from "react";
import { navigate, Router } from "@reach/router";
import firebase, { googleProvider } from "../../firebase";
import MockJson from "../../data/queue.json";
import Home from "../Home/Home";
import QueueSignup from "../QueueSignup/QueueSignup";

const Routes = () => {
  const [queue, setQueue] = useState([]);
  const [user, setUser] = useState();

  const signIn = () => {
    firebase.auth().signInWithRedirect(googleProvider);
  };

  const signOut = () => {
    console.log("hi");
    firebase.auth().signOut();
    navigate("/");
  };

  const getUserInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate("queue");
      } else {
        setUser(null);
        navigate("/");
      }
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    setQueue(MockJson);
    console.log(queue);
  }, []);

  return (
    <Router>
      <Home path="/" signIn={signIn} />
      <QueueSignup
        path="queue"
        queueData={queue}
        signOut={signOut}
        signIn={signIn}
        user={user}
      />
    </Router>
  );
};

export default Routes;
