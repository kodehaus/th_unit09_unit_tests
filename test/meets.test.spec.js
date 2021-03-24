const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const fsPromise = require('fs').promises;
const axios = require('axios').default;


// Helper method to identify if files exist within the file system
const testItemExists = async (filePath) => {
  const fileExists = await fsPromise.access(filePath, fs.F_OK)
    .then(() => true)
    .catch((error) => false);
  return fileExists;
};
// Helper method to locate strings within files
const testFileContainsString = async (filePath, searchString) => {
  const searchStringExists =
  await fsPromise.readFile(filePath)
    .then((fileContents) => fileContents.includes(searchString))
    .catch((error) => false);
  return searchStringExists;
};

describe('Mocha', function () {
  it('should execute properly', function () {
    expect(true).to.be.true;
  });
});

describe('meets expectations', function () {
  describe('Validate instructions 01', function () {
    describe('.gitignore', function () {
      it('file should exist', async function () {
        const actual = await testItemExists(global.appRoot + '.gitignore');
        expect(actual).to.be.true;
      });
      it('file should contain node_modules', async function () {
        const actual = await testFileContainsString(global.appRoot + '.gitignore', 'node_modules');
        expect(actual).to.be.true;
      });
      // end of git ignore check
    });

    describe('application', function () {

      it('should return a 200 status when accessing http://localhost:5000', async function () {
        const actual = await (await axios.get('http://localhost:5000')).status;
        const expected = 200;
        expect(actual).to.equal(expected);
      });

      it('should return a 404 status when accessing unknown page http://localhost:5000/12qw@$@$@iijjhg3cfdhf', async function () {
        let actual = null;
        let expected = 404;
        try{
          actual = await (await axios.get('http://localhost:5000/12qw@$@$@iijjhg3cfdhf')).status;
        } catch(err){
          actual = err.response.status;
        }
        expect(actual).to.equal(expected);
      });

    });


    // end of validate instructions 01
  });
  // end of meets 
});