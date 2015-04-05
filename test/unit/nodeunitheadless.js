// We will unit test both the original library and the minified version
var FTWEEN_uncompressed = require('../../src/ftween.js');
var FTWEEN_min = require('../../build/ftween.min.js');
var getTests = require('./tests');

module.exports = {
	'tween': getTests(FTWEEN_uncompressed),
	'tween_min': getTests(FTWEEN_min)
};

