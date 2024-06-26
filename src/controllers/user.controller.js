const { Router } = require("express");
const userService = require("../services/user.service");

const router = new Router()

//router.get('/', userService.login)
router.post('/login', userService.authorizationUser)
router.post('/registration', userService.registrationUser)

module.exports = router;