module.exports = function (req, res, next) {
  console.log('middleware!');

    //do the user check
    //grab user from database
    //var user = User.findOne({ username: req.params.username });

    //was no user. 404
    var user = 'mike';
    if ( ! user) {
        res.status(404);
        return res.send('404 not found');
    }

    //attaching information to the request
    req.user = {
        username: 'chris'
    };

    next();
};