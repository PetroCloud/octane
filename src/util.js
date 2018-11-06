const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const util = {
  getUserConfig(configPath = path.resolve(process.env.HOME, '.octane')) {
    return fs.existsSync(configPath) && dotenv.config({ path: configPath });
  }
}

module.exports = util;
