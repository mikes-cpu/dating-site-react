import React, { useEffect, useRef, useState } from "react";
import { HeaderText } from "../HeaderText/HeaderText";
import "./HeroSection.scss";
import useVH from "react-viewport-height";
import { Button } from "../Button/Button";

import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection({ signIn }) {
  useVH();

  const [headingSize, setHeadingSize] = useState("");

  const controlHeadingSize = () => {
    if (window.innerWidth <= 768) {
      setHeadingSize("medium");
    } else {
      setHeadingSize("large");
    }
  };
  window.addEventListener("resize", controlHeadingSize);

  useState(() => {
    if (window.innerWidth <= 768) {
      setHeadingSize("medium");
    } else {
      setHeadingSize("large");
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const canvas = useRef(null);

  const snow = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight - 75;
    let particleArray;

    console.log(window.innerHeight);

    function Particle(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    const particle1 = new Particle(100, 100, 1, 1, 20, "white");
    particle1.draw();

    Particle.prototype.update = function () {
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size > canvas.width || this.y - this.size < 0) {
        this.directionY = -this.directionY;
      }
      this.x += this.directionX;
      this.x += this.directionY;
      this.draw();
    };

    // create particle array
    function init() {
      particleArray = [];
      for (let i = 0; i < 100; i++) {
        let size = Math.random() * 2;
        let x = Math.random() * (window.innerWidth - size * 2.5);
        let y = Math.random() * (window.innerHeight - size * 2.5);
        let directionX = Math.random() * 0.2 - 0.2;
        let directionY = Math.random() * 0.2 - 0.2;
        let color = "white";

        particleArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
      }
    }

    init();
    animate();

    // window.addEventListener("resize", function () {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   init();
    // });
  };

  useEffect(() => {
    snow();
  }, []);

  return (
    <>
      <canvas ref={canvas} className="canvas"></canvas>
      <div className="HeroSection">
        <div className="HeroSection__container">
          <HeaderText
            headerText="THE DATING APP FOR"
            headerTextStyle="headerText--primary"
            headerTextSize={`headerText--${headingSize}`}
            headerTextColor="headerText--white"
            headerTextTransition="fade-up"
          />
          <HeaderText
            headerText="MUSIC LOVERS"
            headerTextStyle="headerText--underline"
            headerTextSize={`headerText--${headingSize}`}
            headerTextColor="headerText--pink"
            headerTextTransition="fade-up"
          />
          <p data-aos="fade-up">
            POM harnesses the Power of Music, channelling it into an exciting,
            new inclusive dating app.
          </p>
          <Button
            buttonText="Join The Queue"
            buttonStyle="button--primary-pink"
            buttonSize="button-medium"
            onClick={signIn}
            buttonTransition="fade-up"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
