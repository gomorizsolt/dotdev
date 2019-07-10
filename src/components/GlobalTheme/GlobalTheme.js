import React from "react";
import { ThemeProvider } from "styled-components";
import GetTheme from "../../utils/GetTheme/GetTheme";
import * as CustomHooks from "../../utils/CustomHooks/CustomHooks";
import { ThemeContext } from "../../utils/useTheme/useTheme";

const GlobalTheme = ({ children }) => {
  const [themeState, setThemeState] = CustomHooks.useEffectDarkMode();

  if (!themeState.hasThemeLoaded) {
    return <div>Loading ...</div>;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const currentTheme = themeState.dark ? GetTheme("dark") : GetTheme("light");

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default GlobalTheme;
