const { expect } = require('chai');
const path = require('path');
const fsPromise = require('fs').promises;
const axios = require('axios').default;

module.exports = () => {
  // Helper method to identify if files exist within the file system
const testItemExists = async (filePath) => {
  const fileExists = await fsPromise.access(filePath)
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

  describe('Instructions 01', function () {
    describe('The .gitignore file', function () {
      it('should exist', async function () {
        const expected = true;
        const actual = await testItemExists(path.join(process.cwd(), '.gitignore'));

        expect(actual).to.be.equal(expected);
      });
      
      it('should contain the text node_modules', async function () {
        const expected = true;
        const actual = await testFileContainsString(path.join(process.cwd(), '.gitignore'), 'node_modules');

        expect(actual).to.equal(expected);
      });
    });

    describe('api application', function () {
      it('should return a 200 status when accessing http://localhost:5000', async function () {
        const actual = await (await axios.get('http://localhost:5000')).status;
        const expected = 200;

        expect(actual).to.equal(expected);
      });

      it('should return a 404 status when accessing an unknown page http://localhost:5000/12qw@$@$@iijjhg3cfdhf', async function () {
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

  describe('course model', () => {
    const  db  = require(path.join(process.cwd(),'/models/index'));
    const Course = db.Course;
    it('should not allow null values', () => {
      const expected = false;
      const actual = Course.rawAttributes.title.allowNull;

      expect(actual).to.equal(expected);
    })

  })
});
}