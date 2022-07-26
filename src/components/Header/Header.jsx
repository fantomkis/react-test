import React from "react";
import s from "./MainPage.module.css";
import sprite from "../assats/sprite.svg";

function Header({ title, icon }) {
  return (
    <header className={s.header}>
      <button type={s.button}>
        <svg width="15" height="15">
          <use href={sprite + icon}></use>
        </svg>
      </button>
      <h1 className={s.title}>{title}</h1>
    </header>
  );
}

export default Header;
