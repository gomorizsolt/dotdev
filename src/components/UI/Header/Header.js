import React from "react";
import { HeaderContainer } from "./Header.style";
import ToggleButton from "../ToggleButton/ToggleButton";

const header = () => (
  <HeaderContainer>
    <img src="static/logo/logo.png" alt="C-Hive" />
    <p>C-Hive</p>
    <ToggleButton />
  </HeaderContainer>
);

export default header;
