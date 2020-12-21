import React from 'react';
import notFound from '../images/notFound.png';

export default function HomeView() {
  return (
    <>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
        Oops! No such page :(
      </p>
      <img style={{ width: '500px' }} src={notFound} alt="error" />
    </>
  );
}
