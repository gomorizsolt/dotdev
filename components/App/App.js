import React from 'react';
import Header from '../UI/Header/Header';
import GitHubContributions from '../GitHubContributions/GitHubContributions';
import { GithubUsernames } from '../../resources/Users/Users';

const app = () => (
  <div>
    <Header />
    <GitHubContributions userNames={GithubUsernames} />
  </div>
);

export default app;
