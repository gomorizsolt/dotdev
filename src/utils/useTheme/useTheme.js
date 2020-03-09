import { createContext, useContext } from "react";

const defaultContextData = {
  darkMode: true,
  toggle: () => {},
};

export const themeContext = createContext(defaultContextData);
export const useTheme = () => useContext(themeContext);
