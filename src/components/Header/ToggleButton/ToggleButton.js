import React from "react";
import styled from "styled-components";
import { toggleButtonContainerStyle } from "./ToggleButton.style";
import { useTheme } from "../../../contexts/Theme";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const ToggleButtonContainer = styled.div`
  ${toggleButtonContainerStyle}
`;

const ToggleButton = () => {
  const { theme, toggle } = useTheme();

  return (
    <ToggleButtonContainer>
      <label id="shifter" htmlFor="shiftercb" className="switch">
        <div className="moon">
          <MoonIcon />
        </div>
        <input
          id="shiftercb"
          type="checkbox"
          onChange={toggle}
          checked={theme !== "dark"}
          name="checkbox"
        />
        <span className="slider round" />
        <div className="sun">
          <SunIcon />
        </div>
      </label>
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
