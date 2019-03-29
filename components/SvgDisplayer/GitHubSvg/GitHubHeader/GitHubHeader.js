import React from 'react';
import ContributionsValueDisplayer from '../../../UI/ContributionsValueDisplayer/ContributionsValueDisplayer';
import { Header, ColorsList } from './GitHubHeader.style';
import * as ColorSchemas from '../../../../resources/ColorSchemas/ColorSchemas';

const gitHubHeader = ({ isLoading, contributionSvgs }) => (
  <Header>
    <ContributionsValueDisplayer
      isLoading={isLoading}
      contributionSvgs={contributionSvgs}
    />
    <ColorsList>
      {ColorSchemas.GitHubColorSchema
        .map(backgroundColor => <li key={backgroundColor} style={{ backgroundColor }} />)}
    </ColorsList>
  </Header>
);

export default gitHubHeader;
