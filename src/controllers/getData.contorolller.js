const { Router } = require("express");
const getDataService = require('../services/getData.service')

const router = new Router()

router.get('/', getDataService.getData)

module.exports = router