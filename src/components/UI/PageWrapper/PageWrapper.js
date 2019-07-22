import React from "react";
import styled from "styled-components";
import { pageWrapperStyle } from "./PageWrapper.style";
import Header from "../Header/Header";

const PageWrapper = styled.div`
  ${pageWrapperStyle}
`;

const pageWrapper = props => {
  const { children } = props;

  return (
    <PageWrapper>
      <Header />
      <div className="content">{children}</div>
    </PageWrapper>
  );
};

export default pageWrapper;
