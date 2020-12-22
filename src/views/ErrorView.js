import React from 'react';
import PropTypes from 'prop-types';
import notFound from '../images/notFound.png';

export default function ErrorView({ title }) {
  const defaultTitle = 'Oops! No such page :(';

  return (
    <>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
        {title || defaultTitle}
      </p>

      <img style={{ width: '500px' }} src={notFound} alt="error" />
    </>
  );
}

ErrorView.propTypes = {
  title: PropTypes.string,
};
