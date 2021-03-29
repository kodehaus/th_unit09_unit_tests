# Unit 09 Test Suite

### Purpose
The project will allow the team to create shared code to implement testing on Unit 09 Treehouse projects

### Background 
The team is developing two applications. 
The first application is a test suite that will be used to test project 09.
The second application is the project 9 application. 
The code contained in this reposisitory will be used as the test suite. 

### Installation 
1. **Pull down this Git Repo and set it up so you can develop, execute and push changes**
Check this code out as a regular project. Install the dependencies by typing the following terminal command in the root of the projects directory:
```javascript
npm install
```

2. **Add the test project to the global package directory as a symbolic link**
 The name of this project is defined as the name property in the package.json file. The name of this project is "th_unit09_unit_tests". While using the terminal in the project's root directory, type the following commad:
 ```javascript
npm link
```



2. **Install the test code as a dependency in your unit 8 project**
You will need to ensure that you use Powershell for the next steps. 
In your Unit 08 project run: npm install --save-dev [dir to unit 8 test project ie: npm install C:\Users\krobin13\Desktop\SourceCode\th_unit_08_test_suite\]
*Using a dev dependency should ensure anyone downloading your code can execute your project without this test code. Confirm this*

3. **Add the test folder to store a script to execute our tests to your unit 8 project** Add a folder to the root of your project with the name test .

4. **Add the js file in the unit 8 project that we will use to invoke execution of the tests in our imported package** Add a js file into the test folder that will manually execute the Mocha tests. You can use executeTest.js. You will need to use this name in step 6.

5. **Add the code into our js file in project 8 that will invoke the tests stored in our package** Add the following information into the file added into the test folder
```javascript
const test = require('th_unit08_test_suite');
var path = require('path');

// we define a global app root variable so we can determine the root of the application
global.appRoot = path.resolve(__dirname + "\\..\\");

// we manually execute the tests in the included package
test.executeMeetsTest();
```

6. **Set up node to manually execute our tests when you run the npm test command in your unit 8 project** Finally, let node know that when you execute the npm test command to manually execute the code we've written in this project. Do this by adding/altering the package.json file so that the test script runs the file we created in step 5. Ensure the following property is in the scripts object in the package.json file.

```javascript
"test": "node test/executeTest.js"
```
7. **Execute the tests** You should now be able to execute the suite of tests using npm test
The route /books/error/500 was created in the routes/books.js /or whereever you define the book route so that we could test for a 500 error
```javascript
router.get('/error/500', asyncHandler((req, res) => {
  const internalServerError = new Error('500 Internal Server Error');
  throw (internalServerError);
}));
```



*Note*
Remember, this code is executing from an imported package within the node_modules folder of your project. You must be mindful to differentiate between executing code targeted at the root of your project vs code executed within the npm package located in a  folder inside of your node_modules folder. 