import React from "react";
import { useTheme } from "../../../utils/useTheme/useTheme";
import { ToggleButtonContainer } from "./ToggleButton.style";

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
        <span className="slider round" />
      </label>
    </ToggleButtonContainer>
  );
};

export default toggleButton;
