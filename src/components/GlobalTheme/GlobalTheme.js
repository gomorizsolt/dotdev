import React from "react";
import { ThemeProvider } from "styled-components";
import GetTheme from "../../utils/GetTheme/GetTheme";
import * as CustomHooks from "../../utils/CustomHooks/CustomHooks";
import { ThemeContext } from "../../utils/useTheme/useTheme";

const globalTheme = ({ children }) => {
  const [themeState, setThemeState] = CustomHooks.useDarkMode();

  if (!themeState.hasThemeLoaded) {
    return (
      <div className="loader">
        <style jsx>
          {`
            .loader {
              display: block;
              width: 58px;
              height: 58px;
              margin: 50vh auto;
            }
            .loader:after {
              content: " ";
              display: block;
              width: 46px;
              height: 46px;
              margin: 1px;
              border-radius: 50%;
              border: 5px solid #325359;
              border-color: #325359 transparent #325359 transparent;
              animation: loader 1.2s linear infinite;
            }
            @keyframes loader {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    );
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

export default globalTheme;
