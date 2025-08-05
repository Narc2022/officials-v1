import React from "react";
import "../../styles/footer.css";

const Footer = () => {
  const quickLink01 = [
    {
      path: "#",
      display: "Marketing",
    },
    {
      path: "#",
      display: "Analytics",
    },
    {
      path: "#",
      display: "Commerce",
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2 className="">Logo</h2>
            <p className="description">Grow with us</p>
            <p className="small__text description">
              amet consectetur adipicing elit. Non expedita vel totam. Culpa,
              facilis iusto.Lorem ipsum dolor sit amet consectetur adipicing
              elit.
            </p>
          </div>
          <div className="footer__quick_links">
            <div className="quick__links-title">Solution</div>
            <ul className="quick__links">
              {quickLink01.map((item, idx) => (
                <li className="quick__link-item" key={idx}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
