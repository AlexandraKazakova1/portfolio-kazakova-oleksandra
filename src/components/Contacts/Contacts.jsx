import React from "react";
import s from "./Contacts.module.css";
import sprite from "../../img/symbol-defs.svg";

const Contacts = () => {
  return (
    <div className={s.contacts} id="contacts">
      <p className={s.contacts_text}>Social Media</p>
      <div className={s.contacts_social}>
        <a
          href="https://www.linkedin.com/in/oleksandrakazakova/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          <svg className={s.icon}>
            <use href={`${sprite}#icon-linkedin`}></use>
          </svg>
        </a>
        <a
          href="https://github.com/AlexandraKazakova1/"
          target="_blank"
          className={s.link}
        >
          <svg className={s.icon}>
            <use href={`${sprite}#icon-github`}></use>
          </svg>
        </a>
      </div>
      <p className={s.contacts_text}>My Contacts</p>
      <div className={s.contacts_social}>
        <a
          href="mailto:zemzikova.oleksandra@gmail.com"
          target="_blank"
          className={s.link}
        >
          <svg className={s.icon}>
            <use href={`${sprite}#icon-envelop`}></use>
          </svg>
        </a>
        <a href="tel:+380631210716" className={s.link}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-phone`}></use>
          </svg>
        </a>

        <a
          href="https://t.me/OleksandraKazak"
          target="_blank"
          className={s.link}
        >
          <svg className={s.icon}>
            <use href={`${sprite}#icon-telegram`}></use>
          </svg>
        </a>
      </div>
      <p className={s.contacts_text}>Download Resume</p>
      <div className={s.contacts_social}>
        <a
          href="../../../public/Oleksandra_Kazakova_Front-end_developer.pdf"
          className={s.link}
        >
          <svg className={s.icon}>
            <use href={`${sprite}#icon-file-pdf`}></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
