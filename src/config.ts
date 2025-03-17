import * as yaml from "yaml";
import { readFileSync } from "fs";

let config: any = {};
const YAML_CONFIG_FILE_PATH = "../config.yml";

try {
  const yamlFile = readFileSync(YAML_CONFIG_FILE_PATH, "utf8");
  config = yaml.parse(yamlFile).config.snap_split;
  console.log("CONFIG LOADED -> YAML");

  if (!config) {
    throw new Error("🔴 [CONFIG] unable to read config file");
  }
} catch (err) {
  console.error("🔴 [CONFIG] unable to read config file", err);
}

export default config;
