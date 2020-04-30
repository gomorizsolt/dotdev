import React from "react";
import styled from "styled-components";
import { twoColStyle } from "./TwoCol.style";

const TwoCol = styled.div`
  ${twoColStyle}
`;

export default props => {
  const { children } = props;

  return <TwoCol>{children}</TwoCol>;
};
