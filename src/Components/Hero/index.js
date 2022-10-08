import React from "react";
import UploadButton from "../UploadButton";
import "./styles.css";
const heroTitle = require("../../Media/heroTitle.png");
const planet = require("../../Media/planet.png");
const cloudOne = require("../../Media/cloudOne.png");
const cloudTwo = require("../../Media/cloudTwo.png");
const cloudThree = require("../../Media/cloudThree.png");

export default function Hero() {
  return (
    <section id="hero-wrapper">
      <img className="hero-title" src={heroTitle} alt="Hero Title" />
      <p className="hero-comment">
        Upload a picture to see where should your waste go!
      </p>
      <div className="hero-image-container">
        <img className="planet" src={planet} alt="3d cartoon planet" />
        <img className="cloudOne" src={cloudOne} alt="3d cloud" />
        <img className="cloudTwo" src={cloudTwo} alt="3d cloud" />
        <img className="cloudThree" src={cloudThree} alt="3d cloud" />
      </div>
      {/* <UploadButton/> */}
    </section>
  );
}
