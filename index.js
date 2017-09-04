const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const NameRoutes = require('./greets');
const Models = require('./models');
const mongoUrl = process.env.MONGO_DB_URL || 'mongodb://localhost/greetings';
const models = Models(mongoUrl);
const nameRoutes = NameRoutes(models);


var app = express();
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


 app.get("/", function(req, res) {
   res.redirect("/home")

 })

 app.get("/", function(req, res){

   res.redirect("/greeted")
})




app.get("/home", nameRoutes.home);
app.post('/home', nameRoutes.home);

  app.get("/greeted", nameRoutes.greeted);
 app.post('/username', nameRoutes.greeted);

 app.get("/counter/:name" , nameRoutes.counter);
app.post("/counter/:name", nameRoutes.counter);

app.post("/clear", nameRoutes.clear);
app.post("/clear", nameRoutes.clear);

var namesGreeted = [];
var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
