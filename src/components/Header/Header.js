import React from "react";
import styled from "styled-components";
import settings from "../../../settings/settings.json";
import { headerStyle } from "./Header.style";
import ToggleButton from "./ToggleButton/ToggleButton";

const Header = styled.div`
  ${headerStyle}
`;

const header = () => (
  <Header>
    {settings.logo ? <img src={settings.logo} alt={settings.name} /> : null}
    {settings.name ? <p>{settings.name}</p> : null}
    <ToggleButton />
  </Header>
);

export default header;
