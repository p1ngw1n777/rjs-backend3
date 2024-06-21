const { Router } = require("express");
const reviewsService = require("../services/reviews.service");

const router = new Router()

router.get('/', reviewsService.getReviews)

module.exports = router