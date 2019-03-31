import React from 'react';

const errorDisplayer = ({ errorMessage }) => {
  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return null;
};

export default errorDisplayer;
