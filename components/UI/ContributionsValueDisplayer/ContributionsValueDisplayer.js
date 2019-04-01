import React from 'react';
import { ContributionsDisplayerContainer } from './ContributionsValueDisplayer.style';
import LoaderIcon from '../../../resources/assets/SVG/LoaderIcon/LoaderIcon';

const contributionsValueDisplayer = ({ isLoading, sumOfContributions }) => {
  let valueDisplayer = <LoaderIcon />;

  if (!isLoading) {
    valueDisplayer = (
      <p>
        {`${sumOfContributions} contributions in the last year`}
      </p>
    );
  }

  return (
    <ContributionsDisplayerContainer>
      {valueDisplayer}
    </ContributionsDisplayerContainer>
  );
};

export default contributionsValueDisplayer;
