<h1>Mbulelo Bakana</h1>

<h3>Content</h3>
<h3>About the app</h3>
<h3>Getting started installations</h3>
<h3>How to use the app</h3>


<h2>About the application</h2>

<br>

<ul><li>The greeting-web-application is a application that is used to greet people in different languages</li>
<li>And it allows one to see the list of people that have been greeted</li>
<li>One can click on the person already greeted to see how many times that is been greeted</li>
<li>Each time a person is greeted the number of greet  increment even if the is greeted in a different language</li>
</ul>

<h2>How to use the app</h2>
<br>
<ul><li>A use must  enter name in the textbox</li>
<li>And after the name a user must select one of the languages below</li>
<li>After selecting a language a user can press the submit button</li>
<li>Because if the user press the submit button without selecting a language</li>
<li>The  languages will return alert message saying<strong> Please fill in the space!</strong></li>
<li>After the person is greeted one can click on link on the greeted names to see the list of greeted people</li>
<li>Lets say one want to see the person current greeted,how times that specific person have been greeted</li>
<li>One can just  click on the person to see how many times that person have been greeted</li>
</ul>


<h2>Getting started installations</h2>
<br>

<ul><li>First go to terminal mkdir myapp</li>
     <li>In the terminal cd myapp</li>
     <li>npm init this command is going to create the package.json</li>
     <li>Why package.json,Package.json is a file that gives the necessary information to npm which allows it to identify the project as well as handle the project's dependencies.
npm init will prompt you to enter some information such as the app name, description, version, author, keyword and also ask if what you see is what you like. </li>
<li>Here example of package.json, {
  "name": "greetings-webapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [
    "heroku"
  ],
  "author": "mbulelo",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.17.1",
    "cool-ascii-faces": "1.3.4",
    "express": "^4.15.3",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.3",
    "heroku": "^0.2.0",
    "mongoose": "^4.11.7",
    "pug": "^2.0.0-rc.3"
  },
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mshav/greeting-web-application.git"
  },
  "bugs": {
    "url": "https://github.com/mshav/greeting-web-application/issues"
  },
  "homepage": "https://github.com/mshav/greeting-web-application#readme"
}
</li>
<li> And one now need to install express</li>
<li>And install body-parser, by runing this  command (npm install body-parser --save) in the terminal and then go to package.json to check if body-parser is installed sucessfuly in the the package.json </li>
<li>And even if installing mongoose one can run the same command in the terminal (npm install mongoose --save ) </li>
<li>And install express-session </li>
<li>And install  express-handlebars</li>
<li>And install mongo </li>




</ul>
