const { Category } = require("../models/model");

class categoriesService {
  async getCategories(req, res) {
    const categories = await Category.findAll(
        {
            attributes: ['category_name', 'category_url_photo', 'category_parent'],
        }
    )

    if(!categories) 
        return res.json({status_code: "bad", msg: "catalog not exists"})

    return res.json({ categoryFromDB: categories })
  }
}

module.exports = new categoriesService()