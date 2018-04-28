require('dotenv').config({ path: '.env' });

var express = require('express');
var fileUpload = require('express-fileupload');
var session = require('express-session');    
var path = require('path');  
var logger = require('morgan');  
var cookieParser = require('cookie-parser');  
var bodyParser = require('body-parser');

//Routes
const guest = require('./routes/index.js');
const user  = require('./routes/user.js');
const api   = require('./routes/api.js');
 
//Config for third-party STUFF
const cloudinary = require('./config/cloudinary.js');
const mongo      = require('./config/mongo.js');

//ENVIROMENT
const env  = require('./config/enviroment.js').env;





var passport = require('passport');  
var LocalStrategy = require('passport-local').Strategy;  
var mongoose = require('mongoose');  
var flash = require('connect-flash');  
var session = require('express-session');
const https = require('https')

mongoose.connect(mongo.url);

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'ejs');

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db =  mongoose.connection;
    next();
});




//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(cookieParser());  


app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'shhsecret' }));


app.use(passport.initialize());  
app.use(passport.session());  
app.use(flash());
app.use(fileUpload());

app.use('/', guest);
app.use('/api', api);

require('./config/passport')(passport);



app.use(function(req, res, next) {  
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(req, res, next) {  
  res.locals.login = req.isAuthenticated();
  res.locals.user = req.user;
  next();
});


if (app.get('env') === 'development') {  
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('./guest/error', {
      message: err.message,
      error: err,
    });
  });
}
app.use(function(err, req, res, next) {  
  res.status(err.status || 500);
  res.render('./guest/error', {
    message: err.message,
    error: {},
  });
});


app.listen(env.port);

console.log("App Ruuning on port" + env.port)
  
module.exports = app;  

