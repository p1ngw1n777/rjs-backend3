const { Category } = require("../models/model");
const { Op } = require('sequelize');

class categoriesService {
  async getCategories(req, res) {
    const categories = await Category.findAll(
        {
             attributes: ['category_name', 'category_url_photo', 'categoryId'],
             where: { categoryId: null }
        }
    )

    if(!categories) 
        return res.json({status_code: "bad", msg: "catalog not exists"})

    return res.json({ categoryFromDB: categories })
  }
}

module.exports = new categoriesService()