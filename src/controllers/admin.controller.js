const { Router } = require("express");
const adminService = require("../services/admin.service");

const router = new Router()

router.get('/getUsers', adminService.allUser)
router.get('/getRoles', adminService.allRole)
router.get('/getTransactions', adminService.allTransactions)

module.exports = router;