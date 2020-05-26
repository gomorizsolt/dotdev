import path from "path";
import fs from "fs";
import yaml from "js-yaml";

const readProductionConfig = () => {
  if (!process.env.CONFIG) {
    throw new Error("`CONFIG` environment variable is not set.");
  }

  try {
    const config = JSON.parse(process.env.CONFIG);

    return config;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error while parsing config from env: ", err);

    throw err;
  }
};

const readDevelopmentConfig = () => {
  const configPath = path.join(process.cwd(), "config", "config.yml");

  try {
    const config = yaml.safeLoad(fs.readFileSync(configPath, "utf8"));

    return config;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error while reading config from local file system: ", err);

    throw err;
  }
};

const readConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return readProductionConfig();
  }

  return readDevelopmentConfig();
};

export default readConfig;
