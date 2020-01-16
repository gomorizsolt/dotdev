import React from "react";
import styled from "styled-components";
import { techIconsStyle } from "./TechIcons.style";

const TechIcons = styled.div`
  ${techIconsStyle}
`;

const techIcons = () => (
  <TechIcons>
    <div className="TechIcons__content">asd</div>
  </TechIcons>
);

export default techIcons;
