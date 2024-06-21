const Router = require('express')
const router = new Router()


const reviewsRouter = require('./reviews.controller');
const userRouter = require('./user.controller');
const categoriesRouter = require('./categories.controller');
const getDataRouter = require('./getData.contorolller');

router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);
router.use('/catalog', categoriesRouter)
router.use('/', getDataRouter)


module.exports = router;