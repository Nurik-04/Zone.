import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // 1. Hookni import qilish
import "./service.css";
import Efekt1 from "../Images/efects1.png";
import Efekt2 from "../Images/efects2.png";
import logo1 from "../Images/logo__img1.png";
import logo2 from "../Images/logo__img2.png";
import logo3 from "../Images/logo__img3.png";
import logo4 from "../Images/logo__img4.png";
import logo5 from "../Images/logo__img5.png";
import logo6 from "../Images/logo__img6.png";

const Service = () => {
  const { t } = useTranslation(); // 2. t funksiyasini chaqirish

  // Logotiplar massivi (kodni qisqartirish uchun)
  const services = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section>
      <div className="container">
        <div className="service__container">
          {/* 3. Dinamik matnlar */}
          <h2 className="service__title">{t("service.title")}</h2>
          <p className="service__text">{t("service.text")}</p>

          <ul className="service__list">
            {services.map((logo, index) => (
              <li className="service__item" key={index}>
                <div className="service__item__img__box">
                  <img src={logo} alt="Logotip" className="service__item__img" />
                </div>
                <h3 className="service__item__title">{t("service.items.order")}</h3>
                <p className="service__item__text">{t("service.items.lorem")}</p>
                <a href="#" className="service__item__link">
                  {t("service.items.more")} <FaArrowRight className="service__item__icon" />
                </a>
              </li>
            ))}
          </ul>

          <div className="service__efekts">
            <div className="service__efekts__box">
              {[Efekt1, Efekt2, Efekt1, Efekt2, Efekt1, Efekt2].map((efekt, i) => (
                <img key={i} src={efekt} alt="" className="service__efekts__img" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
