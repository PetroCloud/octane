// const inquire = require('inquirer');
// const chalk = require('chalk');
const _ = require('lodash');
const program = require('commander');
const execa = require('execa');
const util = require('./util');

const _default = { parsed: {}};
const config = { ..._default.parsed, ...util.getUserConfig().parsed };

program
  .version(require('../package.json').version)
  .action(() => {
    console.log('Default action');
  });

program
  .command('config')
  .action(() => {
    return _.isEmpty(config) ?
      console.warn('Oops! No config exists yet. Check docs for usage instructions.') :
      console.dir(config);
  });

program
  .command('start')
  .action(() => run('docker-compose up -d'));

/**
 * Run - execa wrapper
 * @param {String} command
 * @param {Object} [options]
 * @param {Object} [options.env] Key-value pairs to pass to the child process env
 * @param {String} [options.cwd] Current working directory of the child process
 * @returns {Promise}
 */
function run(command, { env = config, cwd = config.PROJECT_ROOT } = {}) {
  return execa.shell(command, { env, cwd, stdio: 'inherit'});
}

program.parse(process.argv);
