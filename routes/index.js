const router = require('express').Router();
const userRouter = require('./userRouter');
const authenticate = require('../middleware/authentication')

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.use(userRouter)

module.exports = router