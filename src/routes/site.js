var express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');


router.use('/search' , siteController.search);
router.use('/' , siteController.getHome);



module.exports = router;