var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController.js');
const catalogController = require('../controllers/catalogController.js');
const pointsController = require('../controllers/pointsController.js');

/*get methods*/
router.get('/user', userController.getUser);
router.get('/products',catalogController.getProducts);

/*post methods*/
router.post('/points',pointsController.getMorePoints)
module.exports = router;
