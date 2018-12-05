global.window = global;
global.assert = require('chai').assert;
require('../src/cipher.js');
require('./cipher.spec.js');
