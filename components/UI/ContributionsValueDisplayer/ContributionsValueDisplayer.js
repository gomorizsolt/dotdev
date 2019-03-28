import React from 'react';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import { ContributionsDisplayerContainer } from './ContributionsValueDisplayer.style';
import LoaderIcon from '../../../resources/assets/SVG/LoaderIcon/LoaderIcon';

const contributionsValueDisplayer = ({ isLoading, contributionSvgs }) => {
  let valueDisplayer = <LoaderIcon />;

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
