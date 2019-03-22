import React, { Fragment } from 'react';
import GitHubSvg from './GitHubSvg/GitHubSvg';
import { SvgDisplayerContainer } from './SvgDisplayer.style';

const svgDisplayer = () => (
  <Fragment>
    <SvgDisplayerContainer>
      <GitHubSvg />
    </SvgDisplayerContainer>
  </Fragment>
);

export default svgDisplayer;
