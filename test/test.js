import test from 'ava';

const fs = require('fs');
const mock = require('mock-fs');
const path = require('path');

const util = require('../src/util');

const FAKE_ROOT = '/Users/octane/home';
const FAKE_FILE = '.test';

test.before(t => {
	mock({
		[FAKE_ROOT]: {
			[FAKE_FILE]: 'TEST=whoopie',
		},
	});
});

test('getUserConfig', t => {
	const config = util.getUserConfig(path.join(FAKE_ROOT, FAKE_FILE));
	t.deepEqual(config.parsed, { TEST: 'whoopie' });
});

test('writeConfig', t => {
	const mock = { WRITE: 'rite' };
	const writePath = path.join(FAKE_ROOT, '.write')

	t.false(fs.existsSync(writePath));
	util.writeConfig(mock, writePath);

	const config = util.getUserConfig(writePath);
	t.deepEqual(config.parsed, mock);
});

test.after.always('Teardown', t => {
	mock.restore();
});
