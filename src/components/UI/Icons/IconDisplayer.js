import React from "react";
import styled from "styled-components";
import { iconDisplayerStyle } from "./IconDisplayer.style";

const IconDisplayer = styled.div`
  ${iconDisplayerStyle}
`;

const iconDisplayer = ({ name, src }) => (
  <IconDisplayer>
    <img src={src} alt={name} />
  </IconDisplayer>
);

export default iconDisplayer;
