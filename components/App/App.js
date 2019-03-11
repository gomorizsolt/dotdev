import React from 'react';
import Header from '../UI/Header/Header';
import GithubContributions from '../GithubContributions/GithubContributions';
import { GithubUsernames } from '../../resources/Users/Users';

const app = () => (
  <div>
    <Header />
    <GithubContributions userNames={GithubUsernames} />
  </div>
);

export default app;
