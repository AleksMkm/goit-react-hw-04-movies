import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Header.module.css';

class Header extends Component {
  state = {
    activePage: 'home',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.props.changeView(value);
  };

  render() {
    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          <label className={s.control}>
            <input
              type="radio"
              className={s.input}
              value="home"
              name="activePage"
              onChange={this.handleChange}
              checked={this.state.activePage === 'home'}
            />
            <span className={s.btn}>Home</span>
          </label>
          <label className={s.control}>
            <input
              type="radio"
              className={s.input}
              value="movies"
              name="activePage"
              onChange={this.handleChange}
              checked={this.state.activePage === 'movies'}
            />
            <span className={s.btn}>Movies</span>
          </label>
        </div>
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  changeView: PropTypes.func.isRequired,
};
