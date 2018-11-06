const path = require('path');
const util = require('util');
const fs = require('fs');

const _ = require('lodash');
const program = require('commander');
const inquire = require('inquirer');
const chalk = require('chalk');
const dotenv = require('dotenv');

const config = { parsed: {}};
loadUserConfig();

program
  .version(require('../package.json').version)
  .action(() => {
    console.log('Hello, world!');
  });

program
  .command('config')
  .action(() => {
    console.log(config);
  });


function getUserConfig(configPath = path.resolve(process.env.HOME, '.env')) {
  return fs.existsSync(configPath) && dotenv.config({ path: configPath });
}

function loadUserConfig() {
  _.assign(config, getUserConfig());
}

program.parse(process.argv);
