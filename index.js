const path = require('path');

module.exports = {
    meetsRun: require(path.join(path.join(__dirname), '/test/meets.tests.js')),
    exceedsRun: require(path.join(path.join(__dirname), '/test/exceeds.tests.js'))
}