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

  //SELECT 'product_name', 'product_url_photo', 'price' FROM Product WHERE categoryId = id в таблице Category 
  //(вообще тут должен быть скорее всего join inner, но я манал как их писать)
  async getProduct(req, res, next) {
        const data = req.body.data;
        
        console.log('Ты выбрал категорию с id = ', data)

        // Извлекаем все id из объекта data
        const idCategories = Object.values(data).filter(Boolean);

        console.log('Ты выбрал категории с id = ', idCategories);

        // Проверяем, является ли idCategories массивом
        if (Array.isArray(idCategories) && idCategories.length > 0) {
            // Если idCategories - массив, выполняем запрос для каждого элемента массива
            const productList = await Promise.all(
            idCategories.map(async (id) => {
                return await Products.findAll({
                attributes: ['product_name', 'product_url_photo', 'price'],
                include: {
                    model: Category,
                    attributes: [],
                    where: { id }
                }
                });
            })
            );

            // Объединяем результаты в один массив
            const flattenedProductList = productList.flat();

            console.log(flattenedProductList);
            return res.json(flattenedProductList);
        } 
        else {
            // Если idCategory - одиночное значение, выполняем запрос как раньше
            const productList = await Products.findAll({
            attributes: ['product_name', 'product_url_photo', 'price'],
            include: {
                model: Category,
                attributes: [],
                where: { id: data }
            }
            });

                console.log(productList)

                return res.json(productList);
        }
        /*const productList = await Products.findAll(
                    {
                        attributes: [ 'product_name', 'product_url_photo', 'price' ],
                        include: {
                            model: Category,
                            attributes: [],
                            where: { id: idCategory}
                        }
                    }
                )*/
    }
}

module.exports = new categoriesService()