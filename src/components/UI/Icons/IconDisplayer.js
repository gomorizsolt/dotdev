import React from "react";
import styled from "styled-components";
import { iconDisplayerContainerStyle } from "./IconDisplayer.style";

const IconDisplayerContainer = styled.div`
  ${iconDisplayerContainerStyle}
`;

const IconDisplayer = ({ name, src }) => (
  <IconDisplayerContainer>
    <img src={src} alt={name} />
  </IconDisplayerContainer>
);

export default IconDisplayer;
