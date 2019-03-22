import React, { Component, Fragment } from 'react';
import { stringify } from 'svgson';
import { ContributionsFooter, ColorsList } from './GitHubSvg.style';
import * as ColorSchemas from '../../../resources/ColorSchemas/ColorSchemas';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);
    this.container = null;
  }

  componentDidMount() {
    const svg = stringify(CalendarUtils.GetTodaysCalendar());

    this.container.innerHTML = svg;
  }

  render() {
    return (
      <Fragment>
        <div ref={(el) => {
          this.container = el;
        }}
        />
        <ContributionsFooter>
          <p>
            Learn how we count contributions.
          </p>
          <ColorsList>
            {ColorSchemas.GitHubColorSchema
              .map(backgroundColor => <li key={backgroundColor} style={{ backgroundColor }} />)}
          </ColorsList>
        </ContributionsFooter>
      </Fragment>
    );
  }
}

export default GitHubSvg;
