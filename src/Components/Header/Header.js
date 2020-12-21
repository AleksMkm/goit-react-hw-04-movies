import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <nav className={s.wrapper}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>

        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
