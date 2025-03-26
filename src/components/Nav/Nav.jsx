import React, { useState } from "react";
import s from "./Nav.module.css";
import sprite from "../../img/sprite.svg";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия/закрытия модалки
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Функция для закрытия модалки при клике на фон
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains(s.header_modal)) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={s.container_nav} id="nav">
      <nav className={s.nav}>
        <a href="#nav" className={s.logo}>
          Oleksandra Kazakova
        </a>
        <ul className={s.list}>
          <li>
            <a className={s.item} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={s.item} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className={s.item} href="#contacts">
              Contacts
            </a>
          </li>
        </ul>
        <button className={s.menu_icon_btn} onClick={toggleModal}>
          <svg className={s.menu_svg} width="32" height="32">
            <use href={`${sprite}#icon-header-menu`}></use>
          </svg>
        </button>
      </nav>
      {isModalOpen && (
        <div className={s.header_modal} onClick={handleBackgroundClick}>
          <nav className={s.modal_nav}>
            <a href="../Hero/Hero.jsx" className={s.logo}>
              Oleksandra Kazakova
            </a>
            <ul className={s.modal_list}>
              <li>
                <a href="#about" className={s.modal_link}>
                  About me
                </a>
              </li>
              <li>
                <a href="#projects" className={s.modal_link}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contacts" className={s.modal_link}>
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
