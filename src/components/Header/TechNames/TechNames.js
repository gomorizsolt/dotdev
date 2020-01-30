import React from "react";
import styled from "styled-components";
import { techNamesStyle } from "./TechNames.style";
import settings from "../../../../settings/settings";

const TechNames = styled.div`
  ${techNamesStyle}
`;

const techNames = () => (
  <TechNames>
    {settings.header.technologies.map(tech => (
      <div className="TechName" key={tech}>
        {settings.technologyIcons[tech].name}
      </div>
    ))}
  </TechNames>
);

export default techNames;
