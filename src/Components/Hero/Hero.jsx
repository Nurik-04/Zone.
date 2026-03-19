import React from "react";
import Rasm from "../Images/hero.png";
import { MdPlayCircleOutline } from "react-icons/md";
import "./hero.css";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="hero__container">
          <div className="hero__box">
            <h1 className="hero__title">Virtual Reality Business Solutions</h1>
            <p className="hero__text">
              We have over 15 year exprience in business consultting arena. We
              have over 15 year exprience in business consultting arena and
              artficial intelligence.
            </p>
            <div className="hero__mini__box">
              <button className="hero__btn">Join Us</button>
              <a
                className="hero__link"
                href="https://www.youtube.com/watch?v=ocv3WA4M4M0&list=PLBPNQgUXWBLxYmR8LxM4-s6v-tq-N6f0o"
              >
                <MdPlayCircleOutline className="hero__icon" /> Watch video
              </a>
            </div>
          </div>
          <img src={Rasm} alt="Img" className="hero__img" />
          {/* <div className="hero__efekts">
            <div className="blure"></div>
            <div className="hero__efekts__mini"></div>
            <div className="hero__efekts__mini"></div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
