import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Button() {
  const label = '<- Go back';
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <button type="button" onClick={handleClick}>
      <span>{label}</span>
    </button>
  );
}
