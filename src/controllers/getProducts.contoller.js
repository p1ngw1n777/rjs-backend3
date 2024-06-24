const { Router } = require("express");
const getProductsService = require('../services/getProducts.service')
const categoriesService = require('../services/categories.service')

const router = new Router()

router.get('/', categoriesService.getCategories)
router.get('/lashes', getProductsService.getLashes)
router.get('/glue', getProductsService.getGlue)
router.get('/preparations', getProductsService.getPreparations)
router.get('/twizers', getProductsService.getTwizers)
router.get('/consumables', getProductsService.getConsumables)
router.get('/dop-oborudovanie', getProductsService.getDopOborudovanie)

router.post('/lashes', getProductsService.getProduct)

module.exports = router