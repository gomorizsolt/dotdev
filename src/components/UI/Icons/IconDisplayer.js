import React from "react";
import styled from "styled-components";
import { iconDisplayerStyle } from "./IconDisplayer.style";

const IconDisplayer = styled.div`
  ${iconDisplayerStyle}
`;

const iconDisplayer = props => {
  const { src, backgroundColor } = props;

  return (
    <IconDisplayer backgroundColor={backgroundColor}>
      <img src={src} alt="technology-icons" />
    </IconDisplayer>
  );
};

export default iconDisplayer;
