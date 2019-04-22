import React, { Component } from 'react';

// https://stackoverflow.com/a/44877953/9599137
class CDNDisplayer extends Component {
  constructor(props) {
    super(props);

    this.container = null;
  }

  componentDidMount() {
    window.TeamContributionCalendar(this.container, ['gomorizsolt', 'thisismydesign', 'bencefrelli'], ['gomori.zsolt1995', 'csaba.apagyi', 'bencevoros']);
  }

  render() {
    return (
      <div
        className="container"
        ref={(el) => {
          this.container = el;
        }}
      />
    );
  }
}

export default CDNDisplayer;
