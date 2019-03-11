import React from 'react';
import {
  ContributionsContainer, Element, Title, Value,
} from './GithubDataDisplayer.style';

const sumData = (contributionsData, propName) => {
  const test = contributionsData.reduce((a, b) => a + b[propName], 0);

  return test;
};

const githubDataDisplayer = ({ contributionsData }) => (
  <ContributionsContainer>
    <Element>
      <Title>Contributions in the last year</Title>
      <Value>{sumData(contributionsData, 'last_year')}</Value>
    </Element>
    <Element>
      <Title>Current streak</Title>
      <Value>{sumData(contributionsData, 'current_streak')}</Value>
    </Element>
    <Element>
      <Title>Longest streak</Title>
      <Value>{sumData(contributionsData, 'longest_streak')}</Value>
    </Element>
  </ContributionsContainer>
);

export default githubDataDisplayer;
