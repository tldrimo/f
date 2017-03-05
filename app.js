/**
 * Import core modules
 */
var express        = require('express');
var session        = require('express-session');
var path           = require('path');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var passport       = require('passport');
var passportConfig = require('./config/passport'); // all passport configuration and provider logic

/**
 * Import main route module
 */
var routes = require('./routes');

var app = express();

/**
 * View engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'my_precious' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use('/node_modules', express.static(__dirname + '/node_modules'));

/**
 * PWA Static Exceptions
 */
app.use('/manifest.json', express.static(__dirname + '/manifest.json'));
app.use('/192.png', express.static(__dirname + '/192.png'));
app.use('/144.png', express.static(__dirname + '/144.png'));
app.use('/96.png', express.static(__dirname + '/96.png'));

/**
 * Link main route module to app
 */
app.use('/', routes);

/**
 * Extraneous handler functions
 */

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers

// Development error handler will print stack trace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler will not leak stacktrace to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
