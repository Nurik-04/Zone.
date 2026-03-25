import logo from "../Images/logo.png";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  const [t, i18n] = useTranslation();
  const [open, setOpen] = useState(false);

  const handleChangeCity = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <div className="container">
        <nav className="header__nav">
          
          {/* LOGO */}
          <a className="header__title">
            <img className="header__img" src={logo} alt="" />
          </a>

          {/* BURGER BTN */}
          <div 
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </div>

          {/* NAV LIST */}
          <ul className={`header__list ${open ? "show" : ""}`}>
            <li className="header__item">
              <a href="#home" className="header__link">{t("header.home")}</a>
            </li>
            <li className="header__item">
              <a href="#about" className="header__link">{t("header.about")}</a>
            </li>
            <li className="header__item">
              <a href="#service" className="header__link">{t("header.service")}</a>
            </li>
            <li className="header__item">
              <a href="#pricing" className="header__link">{t("header.pricing")}</a>
            </li>
            <li className="header__item">
              <a href="#blog" className="header__link">{t("header.blog")}</a>
            </li>

            <li className="header__item">
              <a href="#contact" className="header__btn__link">
                {t("header.contact")}
              </a>
            </li>

            {/* LANGUAGE */}
            <li className="header__item">
              <select
                className="buttons"
                onChange={handleChangeCity}
                value={i18n.language}
              >
                <option className="lenguage" value="en">EN</option>
                <option className="lenguage" value="ru">RU</option>
                <option className="lenguage" value="uz">UZ</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
