import React from 'react';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import {
  ContributionsContainer, Element, Title, Value,
} from './GitHubDataDisplayer.style';

const gitHubDataDisplayer = ({ contributionsData }) => (
  <ContributionsContainer>
    <Element>
      <Title>Contributions in the last year</Title>
      <Value>{ContributionsDataUtils.SumValuesByProp(contributionsData, 'last_year')}</Value>
    </Element>
    <Element>
      <Title>Current streak</Title>
      <Value>{ContributionsDataUtils.SumValuesByProp(contributionsData, 'current_streak')}</Value>
    </Element>
    <Element>
      <Title>Longest streak</Title>
      <Value>{ContributionsDataUtils.SumValuesByProp(contributionsData, 'longest_streak')}</Value>
    </Element>
  </ContributionsContainer>
);

export default gitHubDataDisplayer;
