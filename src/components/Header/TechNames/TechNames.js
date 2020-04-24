import React from "react";
import styled from "styled-components";
import { techNamesStyle } from "./TechNames.style";
import { useConfig } from "../../../contexts/Config";

const TechNames = styled.div`
  ${techNamesStyle}
`;

const techNames = () => {
  const config = useConfig();

  return (
    <TechNames>
      {config.header.technologies.map(tech => (
        <div className="TechName" key={tech}>
          {config.technologyIcons[tech].name}
        </div>
      ))}
    </TechNames>
  );
};

export default techNames;
