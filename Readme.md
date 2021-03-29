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
While using the terminal in the project's root directory, type the following command:
 ```javascript
npm link
```


In the future, when you have completed your work with the test suite, you can uninstall it using the following command:
 ```javascript
npm uninstall th_unit09_unit_tests
```


3. **Add the new global test project to your working project's node_modules folder**
The test project's package.json defines the name of our test package as: th_unit09_unit_tests".
Let's add this project by issuing the following npm command:
```javascript
npm link th_unit09_unit_tests
```
This will simply add a symbolic link for the test package into your node_modules folder without adding it to your project.jsonn file. 


4. **Add the js file in the unit 9 project that we will use to invoke execution of the tests in our imported package** Add a js file into the test folder that will manually execute the Mocha tests. You can use executeTest.js. You will need to use this name in step 6.

5. **Add the code into our js file in project 9 that will invoke the tests stored in our package** Add the following information into the file added into the test folder
```javascript
const test = require('th_unit09_unit_tests');
const Mocha = require('mocha');

const mocha = new Mocha();

mocha.addFile(test.meets);
mocha.addFile(test.exceeds);

mocha.run();

```

6. **Set up node to manually execute our tests when you run the npm test command in your unit 8 project** Finally, let node know that when you execute the npm test command to manually execute the code we've written in this project. Do this by adding/altering the package.json file so that the test script runs the file we created in step 5. Ensure the following property is in the scripts object in the package.json file.

```javascript
"test": "node test/executeTest.js"
```
7. **Execute the tests** You should now be able to execute the suite of tests using npm test





*Note*
Remember, this code is executing from an imported package within the node_modules folder of your project. You must be mindful to differentiate between executing code targeted at the root of your project vs code executed within the npm package located in a  folder inside of your node_modules folder. 
