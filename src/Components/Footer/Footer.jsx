import React from "react";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <nav className="footer__nav">
          <article>
            <img src={Logo} alt="Zone logo" />
            <a href="#" className="footer__link">
              <IoLocationOutline /> Dhaka, Bangladesh
            </a>
            <a href="#" className="footer__link">
              <LuPhoneCall /> 0943833399
            </a>
            <a href="#" className="footer__link">
              <MdOutlineMessage /> support@zone.com
            </a>
            <div className="footer__icon__box">
              <a href="#" className="footer__icon__link">
                <FaFacebookF />
              </a>
              <a href="#" className="footer__icon__link">
                <FaTwitter />
              </a>
              <a href="#" className="footer__icon__link">
                <AiFillInstagram />
              </a>
              <a href="#" className="footer__icon__link">
                <FaPinterestP />
              </a>
            </div>
          </article>
          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__title"></h3>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
            </li>
            <li className="footer__item">
              <h3 className="footer__title"></h3>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
            </li>
            <li className="footer__item">
              <h3 className="footer__title"></h3>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
            </li>
            <li className="footer__item">
              <h3 className="footer__title"></h3>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link"></a>
              <a href="#" className="footer__link">Sitemap</a>
            </li>
          </ul>
          <hr />
          <p>&copy; {currentYear} Zone.- All rights reserved.</p>
          <ul className="footer__bottom__list">
            <li className="footer__bottom__item">Privacy</li>
            <li className="footer__bottom__item">Security</li>
            <li className="footer__bottom__item">Terms</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
