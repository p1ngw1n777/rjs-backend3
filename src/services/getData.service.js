const { Category, Review } = require("../models/model");
const { Op } = require('sequelize');

class categoriesService {
  async getData(req, res) {
    const reviews = await Review.findAll(
        {
            attributes: ['photo', 'name', 'surname', 'text', 'wphoto'],
        }
    )

    const categories = await Category.findAll(
        {
            attributes: ['category_name', 'category_url_photo', 'categoryId'],
            where: { categoryId: null }
        }
    )
    
    if(!categories || !reviews)
        return res.json({status_code: "bad", msg: "categories or reviews not exist"})

    return res.json({ obj1: reviews, obj2: categories})
  }
}

module.exports = new categoriesService()