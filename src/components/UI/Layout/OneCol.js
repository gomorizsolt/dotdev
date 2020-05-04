import React from "react";
import styled from "styled-components";
import { oneColStyle } from "./OneCol.style";

const OneCol = styled.div`
  ${oneColStyle}
`;

export default props => {
  const { children } = props;

  return <OneCol>{children}</OneCol>;
};
