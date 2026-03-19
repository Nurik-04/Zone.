import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./service.css";
import Efekt1 from "../Images/efects1.png";
import Efekt2 from "../Images/efects2.png";


const Service = () => {
  return (
    <section>
      <div className="container">
        <div className="service__container">
          <h2 className="service__title">Our Service </h2>
          <p className="service__text">
            We turn information into actionable insights We work to understand
            your issues and are driven to ask better questions in the pursuit of
            making work.
          </p>
          <ul className="service__list">
            <li className="service__item">
              <div className="service__item__img__box">
                <img src="" alt="" className="service__item__img" />
              </div>
              <h3 className="service__item__title">Order Management</h3>
              <p className="service__item__text">
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <a href="#" className="service__item__link">
                Learn more <FaArrowRight />
              </a>
            </li>
          </ul>
          {/* <div className="service__efekts">
            <img src={Efekt1} alt="" className="service__efekts__img" />
            <img src={Efekt2} alt="" className="service__efekts__img" />
            <img src={Efekt1} alt="" className="service__efekts__img" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Service;
