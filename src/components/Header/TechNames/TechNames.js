import React from "react";
import styled from "styled-components";
import { techNamesStyle } from "./TechNames.style";
import { useConfig } from "../../../contexts/Config";

const TechNames = styled.div`
  ${techNamesStyle}
`;

export default () => {
  const { header, techIcons } = useConfig();

  return (
    <TechNames>
      {header.technologies.map(tech => (
        <div className="TechName" key={tech}>
          {techIcons[tech].name}
        </div>
      ))}
    </TechNames>
  );
};
