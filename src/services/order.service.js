const { _attributes } = require("../db");
const { Order, StructureOrder, User } = require("../models/model");
const { Op, where } = require('sequelize');

class orderService {
  async createOrder(req, res, next) {
    try{
        console.log(req.body)
        const { cartItems, total, loginUser } = JSON.parse(req.body.data);
        
        console.log('cartItems: ', cartItems,
            'total: ', total,
            'loginUser: ', loginUser
        )

        let productToJSON = JSON.stringify(cartItems)
        console.log(productToJSON)

        console.log(cartItems)
		let catrItem = await StructureOrder.create( 
			{ 
                products: productToJSON
			});

        console.log(catrItem.id)

        // Шаг 1: Найти пользователя по login
        const user = await User.findOne({
            where: {
                login: loginUser.login
            }
        });

        if (!user) {
            return res.status(404).json({ status: 'false', message: 'Пользователь не найден' });
        }

        
        const order = await Order.create( 
			{ 
				statusOrder: 'Новый',
                //date: new Date().getDate(),
                userId: user.id,
                addressDeliveryId: 1,
                structureOrderId: catrItem.id
			});

		return res.json({status: true, message: 'Заказ создан'})
        
    } catch(error) {
            console.log('Ошибка сервера сервера: ', error)
        }
    }
}

module.exports = new orderService()