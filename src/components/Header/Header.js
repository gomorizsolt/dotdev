import React from "react";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
import { headerStyle } from "./Header.style";
import ToggleButton from "./ToggleButton/ToggleButton";
import TechIcons from "./TechIcons/TechIcons";

const Header = styled.div`
  ${headerStyle}
`;

const header = () => (
  <Header>
    {settings.logo ? <img src={settings.logo} alt={settings.name} /> : null}
    {settings.name ? <p>{settings.name}</p> : null}
    <ToggleButton />
    {settings.header.technologies ? (
      <div className="icons__container">
        <TechIcons />
      </div>
    ) : null}
  </Header>
);

export default header;
