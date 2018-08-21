var express = require('express');
var router = express.Router();
const pointsController = require('../controllers/pointsController.js');
const infoController = require('../controllers/infoController.js');


/*get methods*/
router.get('/info', infoController.getInfo);

/*post methods*/
router.post('/points',pointsController.getMorePoints);


module.exports = router;
