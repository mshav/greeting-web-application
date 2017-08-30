module.exports = function(models) {
  const namesGreeted = [];
  const home = function(req, res, done) {
    var language = req.body.language;
    var greetMsg = '';
    models.Name.findOne({
      name: req.body.name

    }, function(err, result) {
      if (err) {
        return done(err)
      }

      if (result) {
        //increment
        result.counter = result.counter + 1;

        result.save(function(err, results) {
          if (err) {
            return done(err)
          }

        })

        if (language == "Xhosa") {
          greetMsg = "Molo " + " " + result.name;

        }

        if (language == "English") {
          greetMsg = "Hello " + " " + result.name;
        }

        if (language == "French") {
          greetMsg = "Bonjuor" + " " + result.name;
        }


        console.log(greetMsg);
        res.render('home', {
          msg: greetMsg
        });
      }

      if (!result) {
        models.Name.create({
          name: req.body.name,
          counter: 1
        }, function(err, result) {
          if (err) {
            return done(err)
          }

          models.Name.findOne({
            name: req.body.name
          }, function(err, result) {
            if (err) {
              return done(err)
            }


            console.log('First', result);
            if (language == "Xhosa") {
              greetMsg = "molo " + " " + result.name;
            }

            if (language == "English") {
              greetMsg = "hello " + " " + result.name;
            }
            if (language == "French") {
              greetMsg = "bonquor" + " " + result.name;
            }

            res.render('home', {
              msg: greetMsg
            });

          });



        })


      }

    })

  }



  const greeted = function(req, res, next) {
    models.Name.find({}, function(err,results){
      if(err){
        return next()
      }else {

        res.render("greeted", {
          names: results

        })
      }
    })

  }

  const work = function(req, res, next){
  if(err){
   return next()
 }else{

   res.render("work", {
     names: results
   })
 }

  }

  return {
    home,
    greeted,
    work
  }

}
