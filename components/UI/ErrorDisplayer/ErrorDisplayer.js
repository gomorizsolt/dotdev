import React from 'react';
import { ErrorMessageContainer } from './ErrorDisplayer.style';

const errorDisplayer = ({ errorMessage }) => {
  if (errorMessage) {
    return (
      <ErrorMessageContainer>
        {errorMessage}
      </ErrorMessageContainer>
    );
  }

  return null;
};

export default errorDisplayer;
