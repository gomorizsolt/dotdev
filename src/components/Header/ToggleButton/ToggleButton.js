import React from "react";
import styled from "styled-components";
import { toggleButtonStyle } from "./ToggleButton.style";
import { useTheme } from "../../../contexts/Theme";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const ToggleButton = styled.div`
  ${toggleButtonStyle}
`;

export default () => {
  const { theme, toggle } = useTheme();

  return (
    <ToggleButton>
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
    </ToggleButton>
  );
};
