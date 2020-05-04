import React from "react";
import styled from "styled-components";
import { techNamesContainerStyle } from "./TechNames.style";
import { useConfig } from "../../../contexts/Config";

const TechNamesContainer = styled.div`
  ${techNamesContainerStyle}
`;

const TechNames = () => {
  const { header, techIcons } = useConfig();

  return (
    <TechNamesContainer>
      {header.technologies.map(tech => (
        <div className="TechName" key={tech}>
          {techIcons[tech].name}
        </div>
      ))}
    </TechNamesContainer>
  );
};

export default TechNames;
