const { User, Transaction, DeliveryAdress, Review, Role, Products, Category, Order, StructureOrder } = require("../models/model");
require("../models/model");

class adminService {
	async deteleData(req, res, next) {
		try{
			const {nameTable, idItem} = req.body.data;
			console.log('nameTable: ', nameTable, 'idItem: ', idItem)
			let user;
			let column;
			switch(nameTable){
				case 'deleteUsers':
					await User.destroy({
						where: {
							id: idItem
						}
					})

					user = await User.findAll({
						include: {
							model: Role,
							attributes: [ 'role_name' ]
						},
						attributes: [ 'id', 'login', 'password', 'email',],	
					});

					if(!user) return res.json({status_code: "bad", msg: "user not exists"})
							
					column = [ 
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
					break;
				case 'deleteOrders':
					user = await Order.destroy({
						where: {
							id: idItem
						}
					})
					break;
				case 'deleteRoles':
					user = await Role.destroy({
						where: {
							id: idItem
						}
					})
					break;
				case 'deleteTransactions':
					user = await Order.destroy({
						where: {
							id: idItem
						}
					})
					break;
				case 'deleteDeliveryAddress':
					user = await DeliveryAdress.destroy({
						where: {
							id: idItem
						}
					})
					break;
				case 'deleteReviews':
					user = await Review.destroy({
						where: {
							id: idItem
						}
					})
					break;
				case 'deleteProducts':
					user = await Products.destroy({
						where: {
							id: idItem
						}
					})
					break;
				default: 
					console.log('error')
					break;

			}
			if(!user) return res.json({status_code: "bad", msg: "user not exists"})
			return res.json({ columns: column, users: user})
		}
		catch(error) {
			console.log(error)
		}
	}
	
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
					accessor: 'category.category_name'
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
				include: [
					{
						model: User,
						attributes: [ 'login' ]
					},
					{
						model: DeliveryAdress,
						attributes: [ 'adress' ]
					},
					{
						model: StructureOrder,
						attributes: [ 'products' ]
					}
				],
				attributes: [ 'id', 'statusOrder', 'date'],		
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
					accessor: 'date'
				},
				{
					Header: "Адрес",
					accessor: 'addressDelivery.adress'
				},
				{
					Header: "Состав заказа",
					accessor: 'structureOrder.products'
				}
			]
	
			return res.json({ columns: columns, users: product})
		}
		catch(error) {
			console.log(error)
		}
	  }
	}

module.exports = new adminService()