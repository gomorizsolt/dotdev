import React from 'react';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import {
  ContributionsContainer, Element, Title, Value,
} from './GitHubDataDisplayer.style';

const gitHubDataDisplayer = ({ contributionsData }) => {
  const sumOfContributions = ContributionsDataUtils.SumContributionsValues(contributionsData);

  return (
    <ContributionsContainer>
      <Element>
        <Title>Contributions in the last year</Title>
        <Value>{sumOfContributions}</Value>
      </Element>
    </ContributionsContainer>
  );
};

export default gitHubDataDisplayer;
