import React from "react";
import styled from "styled-components";
import { techNamesStyle } from "./TechNames.style";
import config from "../../../../config/config.yml";

const TechNames = styled.div`
  ${techNamesStyle}
`;

const techNames = () => (
  <TechNames>
    {config.header.technologies.map(tech => (
      <div className="TechName" key={tech}>
        {config.technologyIcons[tech].name}
      </div>
    ))}
  </TechNames>
);

export default techNames;
