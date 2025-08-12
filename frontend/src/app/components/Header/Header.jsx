import React, { useEffect, useRef } from "react";
import "./header.css";

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const nav__links = [
    {
      path: "#home",
      display: "Home",
    },
    {
      path: "#about",
      display: "About",
    },
    {
      path: "#services",
      display: "Services",
    },
    {
      path: "#projects",
      display: "Projects",
    },
    {
      path: "#blog",
      display: "Blog",
    },
  ];

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          {/* ============================== navigation ============================ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    className="menu__link"
                    onClick={handleClick}
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* ============================== light mode =========================== */}
          <div className={theme === "light-theme" ? "" : "light__mode"}>
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i> Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>
          <div className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
