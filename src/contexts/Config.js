import React, { createContext, useMemo } from "react";
import { useFactoryContext } from "../utils/ReactUtils/ReactUtils";
import config from "../../config/config.yml";

const ConfigContext = createContext();
ConfigContext.displayName = "ConfigContext";

export const ConfigProvider = ({ children }) => {
  const value = useMemo(() => config, []);

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => useFactoryContext(ConfigContext);
