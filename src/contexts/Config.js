import React, { createContext } from "react";
import { useFactoryContext } from "../utils/ReactUtils/ReactUtils";
import config from "../../config/config.yml";

const ConfigContext = createContext();
ConfigContext.displayName = "ConfigContext";

export const ConfigProvider = ({ children }) => (
  <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);

export const useConfig = () => useFactoryContext(ConfigContext);
