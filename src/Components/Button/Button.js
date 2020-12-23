import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({ route }) {
  const label = '<- Go back';

  const handleClick = () => {};

  return (
    <button type="button" onClick={handleClick}>
      <Link to={route} style={{ textDecoration: 'none', color: 'black' }}>
        {label}
      </Link>
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.string.isRequired,
};
