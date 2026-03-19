import React from 'react'
import logo from '../Images/Logo.svg';
// import logo0 from '../Images/logo0.svg';
import { useTranslation } from 'react-i18next';
import "./header.css"

const Header = () => {
    const [t, i18n] = useTranslation();
    const handleChangeCity = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };
  return (
    <header>
        <div className="container">
            <nav className='header__nav'>
                <a className='header__title'>
                    <img className='header__img' src={logo} alt="" />
                </a>
                <ul className='header__list'>
                    <li className='header__item'><a href="#" className='header__link'>{t("header.home")}</a></li>
                    <li className='header__item'><a href="#" className='header__link'>{t("header.about")}</a></li>
                    <li className='header__item'><a href="#" className='header__link'>{t("header.service")}</a></li>
                    <li className='header__item'><a href="#" className='header__link'>{t("header.pricing")}</a></li>
                    <li className='header__item'><a href="#" className='header__link'>{t("header.blog")}</a></li>
                    <li className='header__item'><a href="#" className='header__btn__link'>{t("header.contact")}</a></li>
                    <li className='header__item'>
                        <select 
                            className="buttons" 
                            onChange={handleChangeCity} 
                            value={i18n.language} // Hozirgi tanlangan tilni ko'rsatib turadi
                                >
                            <option className='lenguage' value="en">EN</option>
                            <option className='lenguage' value="ru">RU</option>
                            <option className='lenguage' value="uz">UZ</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
