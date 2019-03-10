import React, { useEffect } from 'react';
// import SvgParser from 'github-calendar-parser';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from '../components/App/App';
import GetUserSVG from '../utils/GetUserSVG/GetUserSVG';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const indexPage = () => {
  const fetchUrl = async () => {
    await GetUserSVG('thisismydesign');
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyle />
      <App />
    </React.Fragment>
  );
};

export default indexPage;
