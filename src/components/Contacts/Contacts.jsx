import React from "react";
import Hero from "../Hero/Hero";
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={s.container_footer} id="contacts">
      <nav className={s.nav_footer}>
        <a href={<Hero />} className={s.logo_footer}>
          Oleksandra Kazakova
        </a>
        <ul className={s.list_footer}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        {/* <div class="menu-icon">
          <button class="menu-icon-btn">
            <svg class="menu-svg" width="32" height="32">
              <use href="./img/sprite.svg#icon-header-menu"></use>
            </svg>
          </button>
        </div> */}
      </nav>
    </div>
  );
};

export default Contacts;
