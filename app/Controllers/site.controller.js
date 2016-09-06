var path = require('path'),
    config = require('../../config/main');

module.exports = {
    showHome: showHome,
    showAbout: showAbout,
    showContact: showContact,
    showContactPost: showContactPost,
    showUsername: showUsername,
    show404: show404
};

function showHome(req, res) {
    res.sendFile(path.join(config.PATHS.public, '/index.html'));
}

function showAbout(req, res) {
    res.json({ message: 'Hello from about!' });
}

function showContact(req, res) {
    res.sendFile(path.join(config.PATHS.public, '/contact.html'));
}

function showContactPost(req, res) {
    console.log(req.body);
    res.send('Hello ' + req.body.name + '! Glad to see you!');
}

function showUsername(req, res) {
    console.log(req.params.username);
    //grab user profile
    //grab the post
    res.send('You read article ' + req.params.post_slag +
        ' by ' + req.params.username);
}

//404
function show404(req, res, next) {
    res.status(404);
    res.sendFile(path.join(config.PATHS.public, '/404.html'));
}
