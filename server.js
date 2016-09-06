
var app = require('express')(),
    port = process.env.PORT || 8080,
    morgan = require('morgan'),
    bodyParser = require('body-parser');

//configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authenticate);

//create routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function (req, res) {
    res.json({ message: 'Hello from about!' });
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/public/contact.html');
});

app.post('/contact', function (req, res) {
    console.log(req.body);
    res.send('Hello ' + req.body.name + '! Glad to see you!');
});

app.get('/@:username/:post_slag', checkName, function (req, res) {
    console.log(req.params.username);

    //grab user profile
    //grab the post

    res.send('You read article ' + req.params.post_slag +
            ' by ' + req.params.username);
});

//404
app.use(function (req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/public/404.html');
});

function authenticate(req, res, next) {
    console.log('authenticate user');
    //make sure the user is authenticated
    //grab req.params.token
    //

    next();
}

function checkName(req, res, next) {
    console.log(req.params.username + ' from checkName middleware');
    //validation
    //check database for username
    //var user = User.findOne({ username: req.params.username });
    // if (!user)

    next();
}

//launch server
app.listen(port, function () {
    console.log('App is listening on port: ' + port);
});