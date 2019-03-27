import React from 'react';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import { ContributionsDisplayerContainer } from './ContributionsValueDisplayer.style';

const contributionsValueDisplayer = ({ isLoading, contributionSvgs }) => {
  let valueDisplayer = <p>Loading ...</p>;

  if (!isLoading) {
    const sumOfContributions = ContributionsDataUtils.SumContributionsValues(contributionSvgs);

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
