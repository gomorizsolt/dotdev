import React from "react";
import styled from "styled-components";
import { loaderContainerStyle } from "./Loader.style";

const LoaderContainer = styled.div`
  ${loaderContainerStyle}
`;

const Loader = () => (
  <LoaderContainer>
    <div className="loader" />
  </LoaderContainer>
);

export default Loader;
