import YAML from "yaml";
import { readFileSync } from "fs";

let config: any;

try {
  let configPath: string = "../config.yml";
  const yamlFile = readFileSync(configPath, "utf8");
  config = YAML.parse(yamlFile).config.snapSplit;
  console.log("Config file read successfully ✅");
} catch (error) {
  console.log("Error reading config file ❌");
  throw error;
}

export default config;
