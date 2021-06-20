const router = require('express').Router();
const userController = require('../controllers/userController');

// router.use(authenticate)
router.get('/login', userController.getUser)


module.exports = router