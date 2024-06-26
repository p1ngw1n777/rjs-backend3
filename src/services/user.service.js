const { User } = require("../models/model");

require("../models/model");

class userService {
  async login(req, res) {
    const user = await User.findOne({
      where: { id: 1}
    })
    if(!user) return res.json({status_code: "bad", msg: "user not exists"})

    return res.json({status_code: "good", msg: "user found", user})
  }

  async authorizationUser(req, res, next) {
	const { username, password } = req.body.data;

	const user = await User.findOne({
		attributes: ['login', 'password'],
		where: { login: username }
	})

	if(user != null && user.password === password) {
		return res.json({ success: true, user })
	}
	else {
		return res.json({ success: false, message: 'пользователь не найден' })
	}

	return res.json({ success: false, message: 'пользователь не найден' })	
  }

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
}

  async registrationUser(data) {
    try{
        //console.log(data)
        //console.log('/catalog/' + nameUrl)
        const res = await instance.post('/catalog/' + nameUrl, { data });
        console.log('api: ', res.data);
        
        if(!res){
            console.log('Error 228')
        }
        return res.data;
    } catch(error) {
        console.log('Ошибка при получении товаров c сервера: ', nameUrl, 'Ошибка: ', error)
    }
  }
}

module.exports = new userService()