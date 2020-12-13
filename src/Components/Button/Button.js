import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ clickHandler }) {
  return (
    <button className={s.btn} onClick={clickHandler}>
      {this.props.children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  updateSearchPage: PropTypes.func.isRequired,
};
