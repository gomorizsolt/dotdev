import React from "react";
import styled from "styled-components";
import { techIconsStyle } from "./TechIcons.style";
import ReactIcon from "../../UI/Icons/ReactIcon";
import settings from "../../../../settings/settings";

const TechIcons = styled.div`
  ${techIconsStyle}
`;

const techIcons = () => (
  <TechIcons>
    <div className="TechIcons__content">
      {settings.header.technologies.map(name => (
        <div key={name}>{settings.technologyIcons[name]}</div>
      ))}
      {/* {console.log(settings.technologyIcons)} */}
      {/* {settings.technologyIcons.map(name => (
        <div key={name}>{name}</div>
      ))} */}
      <ReactIcon />
    </div>
  </TechIcons>
);

export default techIcons;
