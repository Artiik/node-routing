
var express = require('express'),
    router = express.Router(),
    path = require('path');

//create routes
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/about', function (req, res) {
    res.json({ message: 'Hello from about!' });
});

router.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
});

router.post('/contact', function (req, res) {
    console.log(req.body);
    res.send('Hello ' + req.body.name + '! Glad to see you!');
});

router.get('/@:username/:post_slag', function (req, res) {
    console.log(req.params.username);

    //grab user profile
    //grab the post

    res.send('You read article ' + req.params.post_slag +
        ' by ' + req.params.username);
});

//404
router.use(function (req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, '../public/404.html'));
});

//export router
module.exports = router;