import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <h3>My Social Network</h3>
        <img src="images/logo1.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;
