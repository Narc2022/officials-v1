import React from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/hero-img.png";
import LightImg from "../../images/light-hero-bg.jpg";
const Hero = ({ theme }) => {
  console.log("heroDarkImg", heroDarkImg);
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipicing elit. Non
              expedita vel totam. Culpa, facilis iusto.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={theme === "light-theme" ? LightImg.src : heroDarkImg.src}
              alt="hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
