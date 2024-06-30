const { Router } = require("express");
const adminService = require("../services/admin.service");

const router = new Router()

router.get('/getUsers', adminService.allUser)
router.get('/getRoles', adminService.allRole)
router.get('/getTransactions', adminService.allTransactions)
router.get('/getAddresses', adminService.allAddresses)
router.get('/getReviews', adminService.allReviews)
router.get('/getProducts', adminService.allProducts)
router.get('/getOrders', adminService.allOrder)

module.exports = router;