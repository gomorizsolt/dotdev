import React from 'react';
import ContributionsValueDisplayer from '../../../UI/ContributionsValueDisplayer/ContributionsValueDisplayer';
import { Header, ColorsList } from './GitHubHeader.style';
import * as ColorSchemas from '../../../../resources/ColorSchemas/ColorSchemas';

const gitHubHeader = ({ isLoading, contributionsData }) => (
  <Header>
    <ContributionsValueDisplayer
      isLoading={isLoading}
      contributionsData={contributionsData}
    />
    <ColorsList>
      {ColorSchemas.GitHubColorSchema
        .map(backgroundColor => <li key={backgroundColor} style={{ backgroundColor }} />)}
    </ColorsList>
  </Header>
);

export default gitHubHeader;
