const path = require('path');
const util = require('util');

const _ = require('lodash');
const program = require('commander');
const inquire = require('inquirer');
const chalk = require('chalk');

program
  .version(require('../package.json').version)
  // .usage('')
  .action(() => {
    console.log('Hello, world!');
  });

program.parse(process.argv);
