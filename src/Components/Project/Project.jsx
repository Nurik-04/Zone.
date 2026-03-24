import React from "react";
import rasm1 from "../Images/project1.png";
import rasm2 from "../Images/project2.png";
import efekt from "../Images/efects3.png";
import { useTranslation } from "react-i18next"; // 1. Hookni import qilamiz
import "./Project.css";

const Project = () => {
  const { t } = useTranslation(); // 2. t funksiyasini olamiz

  return (
    <section>
      <div className="container">
        <div className="project__container">
          {/* Birinchi blok */}
          <article className="project__box">
            <img src={efekt} alt="" className="project__efekt" />
            <img src={rasm1} alt="" className="project__img" />
            <div className="project__box__mini">
              <h3 className="project__title">{t("project.title")}</h3>
              <p className="project__text">{t("project.text")}</p>
              <a className="project__link" href="#">
                {t("project.readMore")}
              </a>
            </div>
          </article>

          {/* Ikkinchi blok */}
          <article className="project__box">
            <img src={efekt} alt="" className="project__efekt" />
            <div className="project__box__mini">
              <h3 className="project__title">{t("project.title")}</h3>
              <p className="project__text">{t("project.text")}</p>
              <a className="project__link" href="#">
                {t("project.readMore")}
              </a>
            </div>
            <img src={rasm2} alt="" className="project__img" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Project;