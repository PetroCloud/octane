// const inquire = require('inquirer');
// const chalk = require('chalk');
const _ = require('lodash');
const program = require('commander');
const util = require('./util');

const config = { parsed: {}};
const userConfig = util.getUserConfig();
_.assign(config, userConfig);

program
  .version(require('../package.json').version)
  .action(() => {
    console.log('Hello, world!');
  });

program
  .command('config')
  .action(() => {
    return userConfig ?
      console.log(config) :
      console.warn('No configuration file exists, would you like to create one?');
  });

program.parse(process.argv);
