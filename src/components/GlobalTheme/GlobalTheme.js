import React from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../resources/themes/LightTheme.style";
import darkTheme from "../../resources/themes/DarkTheme.style";
import Loader from "../UI/Loader/Loader";
import * as customHooks from "../../utils/CustomHooks/CustomHooks";
import { themeContext } from "../../utils/useTheme/useTheme";

const globalTheme = ({ children }) => {
  const [themeState, setThemeState] = customHooks.useDarkMode();

  if (!themeState.hasThemeLoaded) {
    return <Loader />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const currentTheme = themeState.dark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <themeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </themeContext.Provider>
    </ThemeProvider>
  );
};

export default globalTheme;
