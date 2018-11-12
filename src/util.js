const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const _ = require('lodash');

const CONFIG_ROOT_PATH = path.join(process.env.HOME, '.config', 'octane');
const CONFIG_PATH = path.join(CONFIG_ROOT_PATH, '.env');

// Ensure config exists
!fs.existsSync(CONFIG_ROOT_PATH) && fs.mkdirSync(CONFIG_ROOT_PATH, { recursive: true });
// Write empty config
!fs.existsSync(CONFIG_PATH) && writeConfig();

function getUserConfig(configPath = CONFIG_PATH) {
  return fs.existsSync(configPath) && dotenv.config({ path: configPath });
}

function writeConfig(config = {}, configPath = CONFIG_PATH) {
  const parsedConfig = _.map(config, (val, key) => `${key}=${val}`).join('\n');
  return fs.writeFileSync(configPath, parsedConfig)
}

const util = {
  getUserConfig,
  writeConfig
}

module.exports = util;
