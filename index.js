const express = require('express');
var app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

const namesGreeted = [];
const counterMap ={};
var counter = 0;

app.use(express.static('public'))

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30
  }
}));



app.get('/greet', function(req, res) {
  res.render('home')
})

app.post("/greet", function(req, res) {
  var name = req.body.name;
  var language = req.body.language;
  console.log(name);

  if (language == 'Xhosa') {
    var greetMsg = "Molo " + name; //"Hello " + name;
    counter++
  }

  if (language == 'english') {

    var greetMsg = "Hello " + name; //"Hello " + name;
    counter++
  }



  if (language == 'french') {
    var greetMsg = "Bonjour " + name; //"Hello " + name;
    counter++;
  }

if(counterMap[name] === undefined){
  counterMap[name] = 0;
  counter ++;
}
const greetedCounter = counterMap[name];
namesGreeted.push(name);
console.log(namesGreeted)

  var data = {
    greetMsg: greetMsg
  }
  res.render("home", data)
})

// console.log(data);
app.get('/greet/greeted', function(req, res) {
var name = req.body.name;

  res.render("greet", {greet: namesGreeted});
});



var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
