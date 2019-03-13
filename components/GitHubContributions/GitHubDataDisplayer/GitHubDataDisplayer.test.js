import React from 'react';
import { shallow } from 'enzyme';
import GitHubDataDisplayer from './GitHubDataDisplayer';
import { ContributionsContainer } from './GitHubDataDisplayer.style';

describe('<GitHubDataDisplayer />', () => {
  let githubDataDisplayerWrapper;

  const contributionsData = [
    { last_year: 989 },
  ];

  beforeEach(() => {
    githubDataDisplayerWrapper = shallow(
      <GitHubDataDisplayer
        contributionsData={contributionsData}
      />,
    );
  });

  it('renders ContributionsContainer', () => {
    expect(githubDataDisplayerWrapper.find(ContributionsContainer)).toHaveLength(1);
  });
});
