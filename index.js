const path = require('path');

module.exports = {
    exceeds: path.join(path.join(__dirname), '/test/exceeds.tests.js'),
    exceedsRun: require(path.join(path.join(__dirname), '/test/exceeds.tests.js'))
}