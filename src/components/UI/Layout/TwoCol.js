import React from "react";
import styled from "styled-components";
import { twoColContainerStyle } from "./TwoCol.style";

const TwoColContainer = styled.div`
  ${twoColContainerStyle}
`;

const TwoCol = props => {
  const { children } = props;

  return <TwoColContainer>{children}</TwoColContainer>;
};

export default TwoCol;
