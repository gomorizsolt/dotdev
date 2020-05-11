import React, { createContext } from "react";
import { useFactoryContext } from "../utils/ReactUtils/ReactUtils";
// The CI would complain about the missing config file if the rule was not ignored.
// Reason: at build-time, the config comes from an environment variable so it's not committed directly to the repository.
// eslint-disable-next-line import/no-unresolved
import config from "../../config/config.yml";

const ConfigContext = createContext();
ConfigContext.displayName = "ConfigContext";

export const ConfigProvider = ({ children }) => (
  <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);

export const useConfig = () => useFactoryContext(ConfigContext);
