"use client"; // IMPORTANT for app directory

import React from "react";
import dynamic from "next/dynamic";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

// ✅ Dynamically import Slider with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// ✅ CSS imports must come after "use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more that <span className="highlight">5,000</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipicing elit. Non
                expedita vel totam. Culpa, facilis iusto.Lorem ipsum dolor sit
                amet consectetur adipicing elit. Non expedita vel totam. Culpa,
                facilis iusto.Lorem ipsum dolor sit amet consectetur adipicing
                elit. Non expedita vel totam. Culpa, facilis iusto.Lorem ipsum
                dolor sit amet consectetur adipicing elit.
              </p>
              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01.src} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Jhon Doe</h5>
                  <p className="description">CEO, Work creation</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
