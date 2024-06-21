const { Router } = require("express");
const categoriesService = require('../services/categories.service')

const router = new Router()

router.get('/', categoriesService.getCategories)

module.exports = router