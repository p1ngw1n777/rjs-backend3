const { DataTypes } = require("sequelize");
const sequelize = require('../db')

const falseCreatedAt = { timestamps: false, createdAt: false, updatedAt: false } // Отключаем 'timestamps', 'createdAt', 'updatedAt'

const Category = sequelize.define("categories", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	category_name: { type: DataTypes.STRING, allowNull: false, },
	category_url_photo: { type: DataTypes.STRING, allowNull: true, },
}, 
 falseCreatedAt,
);

const Review = sequelize.define('reviews', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	photo: {type: DataTypes.STRING, allowNull: false, },
	name: { type: DataTypes.STRING, allowNull: false, },
	surname: { type: DataTypes.STRING, allowNull: false, },
	text: { type: DataTypes.TEXT, allowNull: false, },
	wphoto: { type: DataTypes.STRING, allowNull: true, },
}, 
 falseCreatedAt,
);

const User = sequelize.define('users', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	//login: { type: DataTypes.STRING, allowNull: false, unique: true, },
	login: { type: DataTypes.STRING, allowNull: false, },
	password: { type: DataTypes.STRING, allowNull: false, },
	email: { type: DataTypes.STRING, allowNull: true }
},
 falseCreatedAt,
)

const Products = sequelize.define('products', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	product_name: { type: DataTypes.STRING, allowNull: false, unique: true, },
	product_url_photo: { type: DataTypes.STRING, allowNull: false, },
	price: { type: DataTypes.INTEGER, allowNull: false},
	value: {type: DataTypes.INTEGER, allowNull: true},
	count: {type: DataTypes.INTEGER, allowNull: true}
},
 falseCreatedAt,
)

const Role = sequelize.define('roles', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	role_name: { type: DataTypes.STRING, allowNull: false, unique: true, },
},
 falseCreatedAt,
)

const Transaction = sequelize.define('transaction', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	count: { type: DataTypes.INTEGER, allowNull: false },
	type: { type: DataTypes.BOOLEAN, allowNull: false } ,
	date: { type: DataTypes.DATE, allowNull:false, defaultValue: DataTypes.NOW }
},
 falseCreatedAt,
)

const DeliveryAdress = sequelize.define('addressDelivery', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	adress: { type: DataTypes.STRING, allowNull: false },
}, 
 falseCreatedAt,
)

const Order = sequelize.define('order', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	statusOrder: { type: DataTypes.STRING, allowNull: false },
	date: { type: DataTypes.DATE, allowNull: true, },
}, 
 falseCreatedAt
)

const WareHouse = sequelize.define('warehouse', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: { type: DataTypes.STRING, allowNull: false,},
	adress: { type: DataTypes.STRING, allowNull: true,  },
	phoneNumber: { type: DataTypes.STRING, allowNull: true, }
},
 falseCreatedAt
)

const StructureOrder = sequelize.define('structureOrder', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	products: { type: DataTypes.JSON, allowNull: false },
}, falseCreatedAt
)

const Invoices = sequelize.define('invoices', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	type: { type: DataTypes.BOOLEAN, allowNull: false},
	date: { type: DataTypes.DATE, allowNull:false, defaultValue: DataTypes.NOW }
}, falseCreatedAt
)

Category.hasMany(Products);
Products.belongsTo(Category);

Category.hasMany(Category);
Category.belongsTo(Category);

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Transaction);
Transaction.belongsTo(User);

User.hasMany(DeliveryAdress)
DeliveryAdress.belongsTo(User)

User.hasMany(Order);
Order.belongsTo(User);

DeliveryAdress.hasMany(Order)
Order.belongsTo(DeliveryAdress)

User.hasMany(Review)
Review.belongsTo(User)

Products.hasMany(Review)
Review.belongsTo(Products)

StructureOrder.hasOne(Order)
Order.belongsTo(StructureOrder)

Products.hasMany(Invoices)
Invoices.belongsTo(Products)

WareHouse.hasMany(Invoices)
Invoices.belongsTo(WareHouse)

module.exports = {
	sequelize,
	Category,
	Review,
	User,
	Products,
	Role, 
	Transaction,
	DeliveryAdress,
	Order,
	WareHouse,
	Invoices,
	StructureOrder
}