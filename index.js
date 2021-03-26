const path = require('path');

module.exports = {
    meets: path.join(path.join(__dirname), '/test/meets.tests.js'),
    exceeds: path.join(path.join(__dirname), '/test/exceeds.tests.js'),
    meetsRun: require(path.join(path.join(__dirname), '/test/meets.tests.js')),
    exceedsRun: require(path.join(path.join(__dirname), '/test/exceeds.tests.js'))
}