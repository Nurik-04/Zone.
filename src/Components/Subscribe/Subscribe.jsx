import React from "react";
import "./Subscribe.css";
import { useTranslation } from "react-i18next";
import { IoSendSharp } from "react-icons/io5"; // Telegram uslubidagi ikonka
import Efect from '../Images/efects4.png'

const Subscribe = () => {
  const { t } = useTranslation();

  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__container" id="blog">
          <img src={Efect} alt="" className="subscribe__efect" />
          <nav className="subscribe__nav"> 
            <h2 className="subscribe__title">{t("subscribe.title")}</h2>
            <p className="subscribe__text">{t("subscribe.text")}</p>

            <form
              className="subscribe__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t("subscribe.placeholder")}
                className="subscribe__input"
                required
              />
              <button type="submit" className="subscribe__button">
                <IoSendSharp className="subscribe__btn-icon" />
                {t("subscribe.button")}
              </button>
            </form>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
