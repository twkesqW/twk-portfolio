import "./homePageStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "animate.css"


const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
    </div>
    <div className="content">
        <h1 className="animate__animated animate__fadeInDown  animate__delay-1s animate__slow">HI! I'm Freelancer.</h1>
        <h3>I'm <strong>Frontend </strong>Developer</h3>
        <div className="btns">
          <Link to="/myskills" className="btn">My Skills</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </div>

    </div>
  </div>;
};

export default HeroImg;