var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController.js');
const catalogController = require('../controllers/catalogController.js');
const pointsController = require('../controllers/pointsController.js');
const infoController = require('../controllers/infoController.js');
const historyController = require('../controllers/historyController.js');

/*get methods*/
//router.get('/user', userController.getUser);
//router.get('/products',catalogController.getProducts);
router.get('/info', infoController.getInfo);

/*post methods*/
router.post('/points',pointsController.getMorePoints);
// router.post('/redeem',historyController.sendProduct);

module.exports = router;
