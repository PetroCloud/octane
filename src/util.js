const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const _ = require('lodash');

const CONFIG_PATH = path.resolve(process.env.HOME, '.octane');

const util = {
  getUserConfig(configPath = CONFIG_PATH) {
    return fs.existsSync(configPath) && dotenv.config({ path: configPath });
  },

  writeConfig(config = {}, configPath = CONFIG_PATH) {
    const parsedConfig = _.map(config, (val, key) => `${key}=${val}`).join('\n');
    return fs.writeFileSync(configPath, parsedConfig)
  }
}

module.exports = util;
