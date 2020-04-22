import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider as StyleProvider } from "styled-components";
import { useFactoryContext } from "../utils/ReactUtils/ReactUtils";
import {
  light as lightTheme,
  dark as darkTheme,
} from "../resources/Themes/Themes";
import Loader from "../components/UI/Loader/Loader";

const ThemeContext = createContext({
  theme: "dark",
  toggle: () => {},
});
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    current: "dark",
    loading: true,
  });

  useEffect(() => {
    // Due to sever-side rendering, the theme cannot be initialized outside of the effect: https://github.com/zeit/next.js/issues/1043
    setTheme(prevTheme => ({
      ...prevTheme,
      current: localStorage.getItem("theme"),
      loading: false,
    }));
  }, []);

  function toggle() {
    const nextTheme = theme.current === "dark" ? "light" : "dark";

    localStorage.setItem("theme", nextTheme);

    setTheme(prevTheme => ({
      ...prevTheme,
      current: nextTheme,
    }));
  }

  if (theme.loading) {
    return <Loader />;
  }

  return (
    <StyleProvider theme={theme.current === "dark" ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme: theme.current, toggle }}>
        {children}
      </ThemeContext.Provider>
    </StyleProvider>
  );
};

export const useTheme = () => useFactoryContext(ThemeContext);
