import React from "react";
import styled from "styled-components";
import TechIconsDisplayer from "../../TechIconsDisplayer/TechIconsDisplayer";
import { techIconsWrapperStyle } from "./TechIcons.style";
import { useConfig } from "../../../contexts/Config";

const TechIconsWrapper = styled.div`
  ${techIconsWrapperStyle}
`;

export default () => {
  const { header } = useConfig();

  return (
    <TechIconsWrapper>
      <TechIconsDisplayer technologies={header.technologies} />
    </TechIconsWrapper>
  );
};
