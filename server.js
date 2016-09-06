
var app = require('express')(),
    port = process.env.PORT || 8080,
    morgan = require('morgan'),
    bodyParser = require('body-parser');

//configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(authenticate);

//set routes
app.use(require('./app/routes'));

// function authenticate(req, res, next) {
//     console.log('authenticate user');
//     //make sure the user is authenticated
//     //grab req.params.token
//     //
//
//     next();
// }
//
// function checkName(req, res, next) {
//     console.log(req.params.username + ' from checkName middleware');
//     //validation
//     //check database for username
//     //var user = User.findOne({ username: req.params.username });
//     // if (!user)
//
//     next();
// }

//launch server
app.listen(port, function () {
    console.log('App is listening on port: ' + port);
});