const { DataTypes } = require("sequelize");
const sequelize = require('../db')

const falseCreatedAt = { timestamps: false, createdAt: false, updatedAt: false } // Отключаем 'timestamps', 'createdAt', 'updatedAt'

const Category = sequelize.define("categories", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category_name: { type: DataTypes.STRING, allowNull: false, },
  category_url_photo: { type: DataTypes.STRING, allowNull: true, },
  category_parent: { type: DataTypes.INTEGER, allowNull: true, },
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
  login: { type: DataTypes.STRING, allowNull: false, unique: true, },
  password: { type: DataTypes.STRING, allowNull: false, },
},
  falseCreatedAt,
)

module.exports = {
  Category,
  Review,
  User
}