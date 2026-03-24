import React from "react";
import "./Team.css";
import { useTranslation } from "react-i18next";

// Swiper komponentlari va modullari
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper stillari
import "swiper/css";
import "swiper/css/pagination";

// Rasmlar
import Rasm1 from "../Images/team1.png";
import Rasm2 from "../Images/team2.png";
import Rasm3 from "../Images/team3.png";
import Rasm4 from "../Images/team4.png";

// Ikonkalar
import { ImSkype } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  const { t } = useTranslation();

  const data = [
    { id: 1, img: Rasm1, name: "Sunny Khan", profession: t("team.professions.executive") },
    { id: 2, img: Rasm2, name: "Alina Jesia", profession: t("team.professions.designer") },
    { id: 3, img: Rasm3, name: "Alex Sohag", profession: t("team.professions.business") },
    { id: 4, img: Rasm4, name: "Afroza Mou", profession: t("team.professions.marketing") },
  ];

  return (
    <section className="team">
      <div className="container">
        <div className="team__container" id="about">
          <header className="team__title__box">
            <h2 className="team__title">{t("team.title")}</h2>
            <p className="team__text">{t("team.text")}</p>
          </header>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="team__swiper"
          >
            {data.map((el) => (
              <SwiperSlide key={el.id}>
                <article className="team__item">
                  <div className="team__img__wrapper">
                    <img src={el.img} alt={el.name} className="team__item__img" />
                  </div>
                  <h3 className="team__item__title">{el.name}</h3>
                  <p className="team__item__text">{el.profession}</p>
                  
                  <div className="team__icon__box">
                    <a href="https://skype.com" target="_blank" rel="noreferrer">
                      <ImSkype className="icon-skype" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <GrLinkedin className="icon-linkedin" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                      <AiFillTwitterCircle className="icon-twitter" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                      <FaFacebook className="icon-facebook" />
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;