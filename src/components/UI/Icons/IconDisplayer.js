import React from "react";
import styled from "styled-components";
import { iconDisplayerStyle } from "./IconDisplayer.style";

const IconDisplayer = styled.div`
  ${iconDisplayerStyle}
`;

export default ({ name, src }) => (
  <IconDisplayer>
    <img src={src} alt={name} />
  </IconDisplayer>
);
