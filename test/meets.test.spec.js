const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const fsPromise = require('fs').promises;
const axios = require('axios');


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