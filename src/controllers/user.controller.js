const { Router } = require("express");
const userService = require("../services/user.service");

const router = new Router()

router.get('/', userService.login)

module.exports = router;