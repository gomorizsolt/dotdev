import React, { Component, Fragment } from 'react';
import { stringify } from 'svgson';
import { Header, SvgContainer } from './App.style';
import GetUpToDateCalendar from '../../utils/GetUpToDateCalendar/GetUpToDateCalendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.container = null;
  }

  componentDidMount() {
    const svg = stringify(GetUpToDateCalendar());

    this.container.innerHTML = svg;
  }

  render() {
    return (
      <Fragment>
        <Header>
          <img src="static/logo/logo.png" alt="C-Hive" />
          <p>C-Hive</p>
        </Header>
        <p>1,058 contributions in the last year</p>
        <SvgContainer
          ref={(el) => {
            this.container = el;
          }}
        />
      </Fragment>

    );
  }
}

/* const app = () => (
  <Header>
    <img src="static/logo/logo.png" alt="C-Hive" />
    <p>C-Hive</p>
  </Header>
); */

export default App;
