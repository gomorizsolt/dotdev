import React, { createContext } from "react";
import { useFactoryContext } from "../utils/ReactUtils/ReactUtils";

const ConfigContext = createContext();
ConfigContext.displayName = "ConfigContext";

export const ConfigProvider = ({ config, children }) => (
  <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);

export const useConfig = () => useFactoryContext(ConfigContext);
