var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var Users = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var weather = require('./routes/helper');
require("dotenv").config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//added later to run on heroku
app.use(express.static(path.join(__dirname,"client","build")))

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/test';
mongoose.connect(process.env.MONGODB_URI || mongoURI,{useNewUrlParser: true}).then(() => console.log('connected to the db')).catch(err => console.log(error));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.use('/', indexRouter);
app.use('/users', Users);
app.use('/testAPI', testAPIRouter);
app.use('/helper',weather);



//added later to run on heroku
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
