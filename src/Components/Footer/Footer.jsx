import React from "react";
import { useTranslation } from "react-i18next";
// ICON
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
// IMGES
import Logo from "../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer__container">
          <nav className="footer__nav">
            <article className="footer__article">
              <img src={Logo} alt="Zone logo" className="footer__logo" />
              <a href="#" className="footer__link">
                <IoLocationOutline className="footer__link__icon" /> {t("footer.address")}
              </a>
              {/* Telefon va email o'zgarmaydi */}
              <a href="tel:0943833399" className="footer__link">
                <LuPhoneCall className="footer__link__icon" /> 0943833399
              </a>
              <a href="mailto:support@zone.com" className="footer__link">
                <MdOutlineMessage className="footer__link__icon" /> support@zone.com
              </a>
              {/* Ikonkalar box... */}
            </article>

            <ul className="footer__list">
              {/* 1. Service Bo'limi */}
              <li className="footer__item">
                <h3 className="footer__title">{t("footer.titles.service")}</h3>
                <a href="#order" className="footer__link">{t("footer.links.order")}</a>
                <a href="#social" className="footer__link">{t("footer.links.social")}</a>
                <a href="#crypto" className="footer__link">{t("footer.links.crypto")}</a>
                <a href="#analyzer" className="footer__link">{t("footer.links.analyzer")}</a>
              </li>

              {/* 2. Company Bo'limi */}
              <li className="footer__item">
                <h3 className="footer__title">{t("footer.titles.company")}</h3>
                <a href="#about" className="footer__link">{t("footer.links.about")}</a>
                <a href="#news" className="footer__link">{t("footer.links.news")}</a>
                <a href="#partner" className="footer__link">{t("footer.links.partner")}</a>
                <a href="#faq" className="footer__link">{t("footer.links.faq")}</a>
              </li>

              {/* 3. Supports Bo'limi */}
              <li className="footer__item">
                <h3 className="footer__title">{t("footer.titles.supports")}</h3>
                <a href="#help" className="footer__link">{t("footer.links.help")}</a>
                <a href="#feedback" className="footer__link">{t("footer.links.feedback")}</a>
                <a href="#contact" className="footer__link">{t("footer.links.contact")}</a>
                <a href="#terms-cond" className="footer__link">{t("footer.links.terms_cond")}</a>
              </li>

              {/* 4. Resources Bo'limi */}
              <li className="footer__item">
                <h3 className="footer__title">{t("footer.titles.resources")}</h3>
                <a href="#download" className="footer__link">{t("footer.links.download")}</a>
                <a href="#blog" className="footer__link">{t("footer.links.blog")}</a>
                <a href="#whats-new" className="footer__link">{t("footer.links.whats_new")}</a>
                <a href="#sitemap" className="footer__link">{t("footer.links.sitemap")}</a>
              </li>
            </ul>
          </nav>

          <hr className="footer__hr" />
          <div className="footer__bottom__box">
            <p>&copy; {currentYear} Zone.- {t("footer.rights")}</p>
            <ul className="footer__bottom__list">
              <li className="footer__bottom__item">{t("footer.privacy")}</li>
              <li className="footer__bottom__item">{t("footer.security")}</li>
              <li className="footer__bottom__item">{t("footer.terms")}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer