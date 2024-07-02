const { Router } = require("express");
const orderService = require("../services/order.service");

const router = new Router()

//router.get('/', userService.login)
router.post('/order', orderService.createOrder)

module.exports = router;