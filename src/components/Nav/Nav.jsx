import React, { useState } from "react";
import s from "./Nav.module.css";
import sprite from "../../img/sprite.svg";
import Modal from "../Modal/Modal";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default Nav;
