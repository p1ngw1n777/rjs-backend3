const Router = require('express')
const router = new Router()


const reviewsRouter = require('./reviews.controller');
const userRouter = require('./user.controller');
const categoriesRouter = require('./categories.controller');
const getDataRouter = require('./getData.contorolller');
const getProducts = require('./getProducts.contoller');
const postLogin1 = require('./user.controller');

router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);
router.use('/catalog', getProducts)
router.use('/', getDataRouter)
//router.use('/', postLogin1)


module.exports = router;