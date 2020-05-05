import React from "react";
import styled from "styled-components";
import { oneColContainerStyle } from "./OneCol.style";

const OneColContainer = styled.div`
  ${oneColContainerStyle}
`;

const OneCol = props => {
  const { children } = props;

  return <OneColContainer>{children}</OneColContainer>;
};

export default OneCol;
