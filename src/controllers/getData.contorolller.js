const { Router } = require("express");
const getData = require('../services/getData.service')

const router = new Router()

router.get('/', getData.getData)

module.exports = router