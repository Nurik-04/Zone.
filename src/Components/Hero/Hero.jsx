import React from "react";
import { useEffect } from "react";
import Rasm from "../Images/hero.png";
import Efekt1 from '../Images/efects1.png';
import Efekt2 from '../Images/efects2.png';
import { MdPlayCircleOutline } from "react-icons/md";
import { useTranslation } from "react-i18next"; // 1. Hookni chaqiramiz
import "./hero.css";

const Hero = () => {
  const { t } = useTranslation(); // 2. t funksiyasini olamiz

  useEffect(() => {
    document.querySelectorAll('*').forEach(el => {
      if (el.offsetWidth > document.documentElement.offsetWidth) {
        el.style.outline = '2px solid red';
      }
    });
  }, []);

  return (
    <main>
      <div className="container">
        <div className="hero__container">
          <div className="hero__box">
            {/* 3. Matnlarni t() funksiyasi orqali almashtiramiz */}
            <h1 className="hero__title">{t("hero.title")}</h1>
            <p className="hero__text">
              {t("hero.text")}
            </p>
            <div className="hero__mini__box">
              <button className="hero__btn">{t("hero.btn")}</button>
              <a
                className="hero__link"
                href="https://www.youtube.com/watch?v=ocv3WA4M4M0"
              >
                <MdPlayCircleOutline className="hero__icon" /> {t("hero.watch")}
              </a>
            </div>
          </div>
          
          <div className="hero__img__box">
            <img src={Rasm} alt="Img" className="hero__img" />
          </div>

          <div className="hero__efekts">
            <img src={Efekt1} alt="" className="hero__efekts__img" />
            <img src={Efekt2} alt="" className="hero__efekts__img" />
            <img src={Efekt1} alt="" className="hero__efekts__img" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
