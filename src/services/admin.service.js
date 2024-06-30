const { User, Transaction, DeliveryAdress, Review, Role, Products, Category, Order } = require("../models/model");
require("../models/model");

class adminService {
	async allUser(req, res) {
		try{
			const user = await User.findAll({
				include: {
					model: Role,
					attributes: [ 'role_name' ]
				},
				attributes: [ 'id', 'login', 'password', 'email',],	
			});
			if(!user) return res.json({status_code: "bad", msg: "user not exists"})
				
		const columns = [ 
			{ 
				Header: '№', 
				accessor: 'id'
			},
			{ 
				Header: 'Имя пользователя',
				accessor: 'login'
			}, 
			{
				Header: 'Пароль',
				accessor: 'password'
			}, 
			{ 
				Header: 'Email', 
				accessor: 'email'
			},
			{
				Header: 'Роль',
				accessor: 'role.role_name'
			}
		]

			return res.json({ columns: columns, users: user})
		}
		catch(error) {
			console.log(error)
		}
	}

	async allRole(req, res) {
		try{
			const role = await Role.findAll({
				attributes: [ 'id', 'role_name'],	
			});
			if(!role) return res.json({status_code: "bad", msg: "user not exists"})
		
		const columns = [ 
		{ 
			Header: '№', 
			accessor: 'id'
		},
		{ 
			Header: 'Имя роли',
			accessor: 'role_name'
		}
		]

			return res.json({ columns: columns, users: role})
		}
		catch(error) {
			console.log(error)
		}
	}

	async allTransactions(req, res) {
		try{
			const transaction = await Transaction.findAll({
				include: {
					model: User,
					attributes: [ 'login' ]
				},
				attributes: [ 'id', 'count', 'type', 'date' ],	
			});
			if(!transaction) return res.json({status_code: "bad", msg: "user not exists"})
		
			const columns = [ 
			{ 
				Header: '№', 
				accessor: 'id'
			},
			{ 
				Header: 'Сумма',
				accessor: 'count'
			},
			{
				Header: 'Тип транзакции', 
				accessor: 'type'
			},
			{
				Header: 'Дата',
				accessor: 'date'
			},
			{
				Header: "Имя пользователя",
				accessor: 'user.login'
			}
			]

			return res.json({ columns: columns, users: transaction})
		}
		catch(error) {
			console.log(error)
		}
	}

	async allAddresses(req, res) {
		try{
			const transaction = await DeliveryAdress.findAll({
				include: {
					model: User,
					attributes: [ 'login' ]
				},
				attributes: [ 'id', 'adress'],	
			});
			if(!transaction) return res.json({status_code: "bad", msg: "user not exists"})
		
			const columns = [ 
			{ 
				Header: '№', 
				accessor: 'id'
			},
			{ 
				Header: 'Адрес',
				accessor: 'adress'
			},
			{
				Header: "Имя пользователя",
				accessor: 'user.login'
			}
			]
	
			return res.json({ columns: columns, users: transaction})
		}
		catch(error) {
			console.log(error)
		}
	  }

	async allReviews(req, res) {
	try{
		const review = await Review.findAll({
			include: {
				model: User,
				attributes: [ 'login' ]
			},
			include: {
				model: Products,
				attributes: [ 'product_name' ]
			},
			attributes: [ 'id', 'name', 'surname', 'text', 'userId', 'productId'],	
		});
		if(!review) return res.json({status_code: "bad", msg: "user not exists"})
	
		const columns = [ 
			{ 
				Header: '№', 
				accessor: 'id'
			},
			{ 
				Header: 'Имя',
				accessor: 'name'
			},
			{
				Header: "Фамилия пользователя",
				accessor: 'surname'
			},
			{
				Header: "Текст отзыва",
				accessor: 'text'
			},
			{
				Header: "Логин пользователя",
				accessor: 'user.login'
			},
			{
				Header: "Название продукта",
				accessor: 'product.product_name'
			},
		]

		return res.json({ columns: columns, users: review})
	}
	catch(error) {
		console.log(error)
	}
	}
	  
	async allProducts(req, res) {
		try{
			const product = await Products.findAll({
				
				include: {
					model: Category,
					attributes: [ 'category_name' ]
				},
				attributes: [ 'id', 'product_name', 'price', 'value'],	
			});
			if(!product) return res.json({status_code: "bad", msg: "user not exists"})
		
			const columns = [ 
				{ 
					Header: '№', 
					accessor: 'id'
				},
				{ 
					Header: 'Название продукта',
					accessor: 'product_name'
				},
				{
					Header: "Цена",
					accessor: 'price'
				},
				{
					Header: "Количество на складе",
					accessor: 'value'
				},
				{
					Header: "Категория",
					accessor: 'category.login'
				},
			]
	
			return res.json({ columns: columns, users: product})
		}
		catch(error) {
			console.log(error)
		}
	  }

	  async allOrder(req, res) {
		try{
			const product = await Order.findAll({
				
				include: {
					model: User,
					attributes: [ 'login' ]
				},
				include: {
					model: DeliveryAdress,
					attributes: [ 'adress' ]
				},
				attributes: [ 'id', 'statusOrder', 'owner', 'date'],	
			});
			if(!product) return res.json({status_code: "bad", msg: "user not exists"})
		
			const columns = [ 
				{ 
					Header: '№', 
					accessor: 'id'
				},
				{ 
					Header: 'Статус заказа',
					accessor: 'statusOrder'
				},
				{
					Header: "Контрагент",
					accessor: 'user.login'
				},
				{
					Header: "Дата",
					accessor: 'value'
				},
				{
					Header: "Адрес",
					accessor: 'addressDeliveries.adress'
				},
			]
	
			return res.json({ columns: columns, users: product})
		}
		catch(error) {
			console.log(error)
		}
	  }
	}

module.exports = new adminService()