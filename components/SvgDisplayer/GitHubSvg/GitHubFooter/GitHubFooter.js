import React from 'react';
import { ContributionsFooter, ColorsList } from './GitHubFooter.style';
import * as ColorSchemas from '../../../../resources/ColorSchemas/ColorSchemas';

const gitHubFooter = () => (
  <ContributionsFooter>
    <p>
      Learn how we count contributions.
    </p>
    <ColorsList>
      {ColorSchemas.GitHubColorSchema
        .map(backgroundColor => <li key={backgroundColor} style={{ backgroundColor }} />)}
    </ColorsList>
  </ContributionsFooter>
);

export default gitHubFooter;
