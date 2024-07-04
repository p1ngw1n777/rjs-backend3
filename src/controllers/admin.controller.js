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

router.post('/deleteUsers', adminService.deteleData)
router.post('/deleteRoles', adminService.deteleData)
router.post('/deleteTransactions', adminService.deteleData)
router.post('/deleteDeliveryAddress', adminService.deteleData)
router.post('/deleteReviews', adminService.deteleData)
router.post('/deleteProducts', adminService.deteleData)
router.post('/deleteOrders', adminService.deteleData)

module.exports = router;