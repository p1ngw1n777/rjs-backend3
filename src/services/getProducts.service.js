const { sequalize, Products, Category } = require("../models/model");
const { Op } = require('sequelize');

class categoriesService {

    //SELECT * FROM products WHERE CategoryId = 7 OR CategoryId = 8 CategoryId = 9
  async getLashes(req, res) {
    const productsLashes = await Products.findAll
    ({
        where: {
            [Op.or]: [{categoryId: 7}, {categoryId: 8}, {categoryId: 9}]
              },
        })

    if(!productsLashes )
        return res.json({status_code: "bad", msg: "lashes not exist"})

    return res.json({ lashes: productsLashes})
  }

  //SELECT * FROM products WHERE CategoryId = 2
  async getGlue(req, res) {
    const productsGlue = await Products.findAll(
        {
            where: {
                categoryId: 2
            },
        }
    )
    if(!productsGlue)
        return res.json({status_code: "bad", msg: "glue not exist"})

    return res.json({ glue: productsGlue})
  }

  //SELECT * FROM products WHERE CategoryId = 3
  async getPreparations(req, res) {
    const productsPreparations = await Products.findAll(
        {
            where: {
                categoryId: 3
            },
        }
    )
    if(!productsPreparations)
        return res.json({status_code: "bad", msg: "preparations not exist"})

    return res.json({ preparations: productsPreparations})
  }

  //SELECT * FROM products WHERE CategoryId = 4
  async getTwizers(req, res) {
    const productsTwizers = await Products.findAll(
        {
            where: {
                categoryId: 4
            },
        }
    )
    if(!productsTwizers )
        return res.json({status_code: "bad", msg: "twizers not exist"})

    return res.json({ twizers: productsTwizers})
  }

  //SELECT * FROM products WHERE CategoryId = 5
  async getConsumables(req, res) {
    const productsConsumables = await Products.findAll(
        {
            where: {
                categoryId: 5
            },
        }
    )
    if(!productsConsumables)
        return res.json({status_code: "bad", msg: "consumables not exist"})

    return res.json({ consumables: productsConsumables})
  }

  //SELECT * FROM products WHERE CategoryId = 6
  async getDopOborudovanie(req, res) {
    const productsDopOborudovanie = await Products.findAll(
        {
            where: {
                categoryId: 6
            },
        }
    )
    if(!productsDopOborudovanie)
        return res.json({status_code: "bad", msg: "dop-oborudovanie not exist"})

    return res.json({ dopOborudovanie: productsDopOborudovanie})
  }

  async getProduct(req, res, next) {
    const idCategory = req.body.data;
    console.log('Ты выбрал категорию с id = ', idCategory)

    const productList = await Products.findAll(
        {
            attributes: [ 'product_name', 'product_url_photo', 'price' ],
            include: {
                model: Category,
                attributes: [],
                where: { id: idCategory}
            }
        }
    )

    console.log(productList)

    return res.json(productList);

//     const idCategory = req.body;

//     const productsList = await Products.findAll(
//        {
//             include: {
//                 model: Category, 
//                 where: { id: idCategory }
//             }
//        }
//     ) 

//     if(!productsList)
//         return res.json({status_code: 'bad', msg: 'gg'})
//     return res.json({productsList: productsList})
    } 
}

module.exports = new categoriesService()