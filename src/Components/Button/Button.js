import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ handleClick }) {
  const label = '<- Go back';

  return (
    <button type="button" onClick={handleClick}>
      <span>{label}</span>
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
