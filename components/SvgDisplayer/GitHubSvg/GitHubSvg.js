import React, { Component, Fragment } from 'react';
import { stringify } from 'svgson';
import ContributionsValueDisplayer from '../../UI/ContributionsValueDisplayer/ContributionsValueDisplayer';
import { ContributionsFooter, ColorsList } from './GitHubSvg.style';
import * as ColorSchemas from '../../../resources/ColorSchemas/ColorSchemas';
import * as CalendarUtils from '../../../utils/CalendarUtils/CalendarUtils';
import * as ContributionsDataUtils from '../../../utils/ContributionsDataUtils/ContributionsDataUtils';
import * as Users from '../../../resources/Users/Users';

class GitHubSvg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contributionsData: [],
      isLoading: true,
    };

    this.container = null;
  }

  async componentDidMount() {
    const svg = stringify(CalendarUtils.GetTodaysCalendar());

    this.container.innerHTML = svg;

    const parsedData = await ContributionsDataUtils.GetParsedData(Users.GithubUsernames);

    this.setState({
      contributionsData: parsedData,
      isLoading: false,
    });
  }

  render() {
    // Proposal: GitHubFooter component?
    const { contributionsData: [...contributionsData], isLoading } = this.state;
    return (
      <Fragment>
        <ContributionsValueDisplayer
          isLoading={isLoading}
          contributionsData={contributionsData}
        />
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
