import React from 'react';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';

function Loader() {
  return (
    <HashLoader
      css={css`
        margin-top: 80px;
      `}
      size={150}
      color={'orange'}
      loading={true}
    />
  );
}

export default Loader;
