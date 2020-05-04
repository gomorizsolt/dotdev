import React from "react";
import styled from "styled-components";
import { loaderStyle } from "./Loader.style";

const Loader = styled.div`
  ${loaderStyle}
`;

export default () => (
  <Loader>
    <div className="loader" />
  </Loader>
);
