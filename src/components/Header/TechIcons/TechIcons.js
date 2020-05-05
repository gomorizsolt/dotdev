import React from "react";
import styled from "styled-components";
import TechIconsDisplayer from "../../TechIconsDisplayer/TechIconsDisplayer";
import { techIconsContainerStyle } from "./TechIcons.style";
import { useConfig } from "../../../contexts/Config";

const TechIconsContainer = styled.div`
  ${techIconsContainerStyle}
`;

const TechIcons = () => {
  const { header } = useConfig();

  return (
    <TechIconsContainer>
      <TechIconsDisplayer collection={header.technologies} />
    </TechIconsContainer>
  );
};

export default TechIcons;
