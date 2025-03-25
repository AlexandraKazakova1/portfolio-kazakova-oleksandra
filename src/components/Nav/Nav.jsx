import React from "react";
import s from "./Nav.module.css";
import Hero from "../Hero/Hero";

const Nav = () => {
  return (
    <div className={s.container_nav}>
      <nav className={s.nav}>
        <a href={<Hero />} className={s.logo}>
          Oleksandra Kazakova
        </a>
        <ul className={s.list}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contacts</a>
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
      {/* <div class="header-modal container">
        <nav class="modal-nav">
          <a href="./index.html" class="modal-nav-link">
            Oleksandra Kazakova
          </a>
          <ul class="modal-header-list">
            <li class="modal-list-item">
              <a href="#about" class="header-item-link">
                About me
              </a>
            </li>
            <li class="modal-list-item">
              <a href="#my_project" class="header-item-link">
                Projects
              </a>
            </li>
            <li class="modal-list-item">
              <a href="#footer" class="header-item-link">
                Contacts
              </a>
            </li>
          </ul>
          <button class="header-modal-btn">
            <svg class="header-modal-svg" height="32" width="32">
              <use href="./img/sprite.svg#close-modal"></use>
            </svg>
          </button>
        </nav>
      </div> */}
    </div>
  );
};

export default Nav;
