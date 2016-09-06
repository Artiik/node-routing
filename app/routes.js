
var express = require('express'),
    router = express.Router(),
    siteController = require('./Controllers/site.controller'),
    dashboardController = require('./Controllers/dashboard.controller');

//site routes ==========================
router.get('/', siteController.showHome);
router.get('/about', siteController.showAbout);
router.get('/contact', siteController.showContact);
router.post('/contact', siteController.showContactPost);
router.get('/@:username/:post_slag', siteController.showUsername);
router.use(siteController.show404);

//dashboard routes ==========================
router.get('/dashboard', dashboardController.showDashboard);

//export router
module.exports = router;