import React from "react";
import styled from "styled-components";
import { techNamesStyle } from "./TechNames.style";
import settings from "../../../../settings/settings";

const TechNames = styled.div`
  ${techNamesStyle}
`;

const techNames = () => (
  <TechNames>
    {settings.header.technologies.map(name => (
      <div className="TechName" key={name}>
        {name}
      </div>
    ))}
  </TechNames>
);

export default techNames;
