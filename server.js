/////////////////////////////////   REQUIRE   //////////////////////////////////

// var express = require('express');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/projects');

// var uploadProj = require('./routes/uploadProj');
// var homeProj = require('./routes/home');
// var login = require('./routes/login');
// var register = require('./routes/register');

//////////////////////////////   APP USE   /////////////////////////////////////s

// var app = express();

// app.use(express.static('public'));
// app.use(express.static('node_modules'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/dashboard', uploadProj);
// app.use('/home', homeProj);

// app.get('/', function(req, res, next){
//   res.sendFile('index.html');
// });


// Below Function: Commented out before Jan14
// app.post('/register', function(req, res, next){
//   next("helloooooo handsome");
// });




// var port = process.env.PORT || '4005';

// app.listen(port);



// Added Jan 14

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/projects');

var Project = require("./models/EmployerProjectModel");
var Submission = require('./models/ApplicantProjectModel');

var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('public'));
app.use(express.static('node_modules'));

// app.use('/userPage', facebookAuthenticate(req, res, next));


// app.get('/userPage', fucntion(req, res){
//   res.send('userPage.html')
// })

app.get('/', function (req, res) {
  res.send("You are inside the fullstack project")
});

app.get('/dashboard', function (req, res) {

  Project.find(function (error, projects) {
    res.send(projects);
  });
});

app.post('/dashboard', function (req, res, next) {
  console.log(req.body);

  var project = new Project(req.body);
  
  project.save(function(err, project) {
    if (err) { return next(err); }
    res.json(project);
  });
});



app.delete('/dashboard/:id', function (req, res) {

  
  res.send('DELETE request to homepage');


  Project.findByIdAndRemove(req.params.id, function(err) {
    if (err) throw err;

    // we have deleted the person
    console.log('item deleted!');
  });


});


app.post('/dashboard/:id/submission/', function(req, res, next) {

  Project.findById(req.params.id, function(err, foundProject) {
    //foundProject is the success function of the project we found in the db
    // we create a function within the function because once we
    // find the project, we want to create and push a User Upload object
    if (err) { return next(err); }

    var submission = new Submission(req.body);

    foundProject.submissions.push(submission);
      
    foundProject.save(function (err, submission) {
      if (err) { return next(err); }

      res.json(submission);
    });  
  });
});

app.listen(8000);


