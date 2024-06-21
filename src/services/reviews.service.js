const { Review } = require("../models/model");

class reviewsService {
  async getReviews(req, res) {
    const user = await Review.findAll()
    if(!user) return res.json({status_code: "bad", msg: "user not exists"})

    return res.json({status_code: "good", msg: "user found", user})
  }
}

module.exports = new reviewsService()