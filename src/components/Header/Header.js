import React from "react";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
import { headerStyle } from "./Header.style";
import ToggleButton from "./ToggleButton/ToggleButton";
import TechIcons from "./TechIcons/TechIcons";
import TechNames from "./TechNames/TechNames";
import TeamMembers from "./TeamMembers/TeamMembers";

const Header = styled.div`
  ${headerStyle}
`;

const header = () => (
  <Header>
    {settings.logo ? (
      <img className="Logo" src={settings.logo} alt={settings.name} />
    ) : null}
    {settings.name ? <p className="Logo__text">{settings.name}</p> : null}
    <ToggleButton />
    {settings.header && settings.header.technologies ? (
      <div className="icons__container">
        {settings.header.display === "icon" ? <TechIcons /> : <TechNames />}
        {settings.header.teamMembers ? <TeamMembers /> : null}
      </div>
    ) : null}
  </Header>
);

export default header;
