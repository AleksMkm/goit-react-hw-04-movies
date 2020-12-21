import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Header.module.css';
import { usePrevious } from '../../hooks/customHooks';

function Header({ changeView, currentPage }) {
  const [activePage, setActivePage] = useState('home');

  const prevPage = usePrevious(activePage);

  useEffect(() => {
    if (prevPage === 'home' && currentPage === 'moviecard') {
      setActivePage('');
    }
  }, [currentPage, prevPage]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setActivePage(value);
    changeView(value);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <label className={s.control}>
          <input
            type="radio"
            className={s.input}
            value="home"
            name="activePage"
            onChange={handleChange}
            checked={activePage === 'home'}
          />
          <span className={s.btn}>Home</span>
        </label>
        <label className={s.control}>
          <input
            type="radio"
            className={s.input}
            value="movies"
            name="activePage"
            onChange={handleChange}
            checked={activePage === 'movies'}
          />
          <span className={s.btn}>Movies</span>
        </label>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  changeView: PropTypes.func.isRequired,
};
