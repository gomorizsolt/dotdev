import React from 'react';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';

const contributionsValueDisplayer = ({ isLoading, contributionsData }) => {
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const sumOfContributions = ContributionsDataUtils.SumContributionsValues(contributionsData);

  return <p>{`${sumOfContributions} contributions in the last year`}</p>;
};

export default contributionsValueDisplayer;
