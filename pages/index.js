import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const indexPage = () => (
  <Header>
    <Title>C-Hive</Title>
  </Header>
);

export default indexPage;
