import path from "path";
import fs from "fs";
import yaml from "js-yaml";

const readConfig = () => {
  if (process.env.NODE_ENV === "production") {
    if (!process.env.CONFIG) {
      throw new Error(
        "Cannot find `CONFIG` environment variable. Make sure it's configured and exposed from the secrets."
      );
    }

    try {
      const config = JSON.parse(process.env.CONFIG);

      return config;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error while parsing config from secrets: ", err);

      throw err;
    }
  }

  const configPath = path.join(process.cwd(), "config", "config.yml");

  try {
    // Parses the YAML configuration to JSON and removes lintering comments.
    const config = yaml.safeLoad(fs.readFileSync(configPath, "utf8"));

    return config;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error while reading config from local file system: ", err);

    throw err;
  }
};

export default readConfig;
