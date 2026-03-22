import React from "react";
import "./Team.css";
// Swiper komponentlari
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Swiper stillari
import "swiper/css";
import "swiper/css/pagination";

import Rasm1 from "../Images/team1.png";
import Rasm2 from "../Images/team2.png";
import Rasm3 from "../Images/team3.png";
import Rasm4 from "../Images/team4.png";
// ICONS
import { ImSkype } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  const data = [
    { id: 1, img: Rasm1, name: "Sunny Khan", profession: "Executive officer" },
    { id: 2, img: Rasm2, name: "Alina Jesia", profession: "UX/UI DESIGNER" },
    {
      id: 3,
      img: Rasm3,
      name: "Alex Sohag",
      profession: "BUSINESS DEVELOPMENT",
    },
    { id: 4, img: Rasm4, name: "Afroza Mou", profession: "Head of marketing" },
    // Slider ko'rinishi uchun yana bir nechta element qo'shishingiz mumkin
  ];

  return (
    <section className="team">
      <div className="container">
        <div className="team__container">
          <header className="team__title__box">
            <h2 className="team__title">Meet Our Team</h2>
            <p className="team__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </header>

          {/* Slider qismi */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30} // Slaydlar orasidagi masofa
            slidesPerView={3} // Bir vaqtda nechta slayd ko'rinishi
            autoplay={{ delay: 3000 }} // Avtomatik aylanish
            pagination={{ clickable: true }} // Pastdagi nuqtalar
            breakpoints={{
              // Ekran o'lchamiga qarab slaydlarni moslashtirish
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="team__swiper"
          >
            {data.map((el) => (
              <SwiperSlide key={el.id}>
                <article className="team__item">
                  <img src={el.img} alt={el.name} className="team__item__img" />
                  <h3 className="team__item__title">{el.name}</h3>
                  <p className="team__item__text">{el.profession}</p>
                  <div className="team__icon__box">
                    <a href="https://skype.softonic.ru/"><ImSkype className="icon-skype" /></a>
                    <a href="https://www.linkedin.com/feed/"><GrLinkedin className="icon-linkedin" /></a>
                    <a href="https://x.com/?lang=ru"><AiFillTwitterCircle className="icon-twitter" /></a>
                    <a href="https://www.facebook.com/?locale=ru_RU"><FaFacebook className="icon-facebook" /></a>
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
