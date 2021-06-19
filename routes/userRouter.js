const router = require('express').Router();
const userController = require('../controllers/userController');

// router.use(authenticate)
router.get('/user', userController.getUser)


module.exports = router