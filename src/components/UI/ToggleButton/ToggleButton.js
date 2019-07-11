import React from "react";
import { useTheme } from "../../../utils/useTheme/useTheme";
import { ToggleButtonContainer } from "./ToggleButton.style";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

// TODO: missing tests.

const toggleButton = () => {
  const themeState = useTheme();

  return (
    <ToggleButtonContainer>
      <label id="shifter" htmlFor="shiftercb" className="switch">
        <input
          id="shiftercb"
          type="checkbox"
          onChange={() => themeState.toggle()}
          checked={!themeState.dark}
          name="checkbox"
        />
        <span className="slider round">
          <div className="sun">
            <SunIcon />
          </div>
          <div className="moon">
            <MoonIcon />
          </div>
        </span>
      </label>
    </ToggleButtonContainer>
  );
};

export default toggleButton;
