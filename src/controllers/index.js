const Router = require('express')
const router = new Router()


const reviewsRouter = require('./reviews.controller');
const adminRouter = require('./admin.controller');
const userRouter = require('./user.controller')
const getDataRouter = require('./getData.contorolller');
const getProducts = require('./getProducts.contoller');
const cartRouter = require('./order.controller')

router.use('/user', userRouter);
router.use('/reviews', reviewsRouter);
router.use('/catalog', getProducts)
router.use('/', getDataRouter)
router.use('/adminka', adminRouter)
router.use('/cart', cartRouter)


module.exports = router;