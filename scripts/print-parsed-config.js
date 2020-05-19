import path from "path";
import fs from "fs";
import yaml from "js-yaml";

(() => {
  const configPath = path.join(process.cwd(), "config", "config.yml");

  const config = yaml.safeLoad(fs.readFileSync(configPath, "utf8"));

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(config));
})();
