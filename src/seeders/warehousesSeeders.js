const { WareHouse } = require('../models/model.js');


async function seedWarehouses() {
    const warehouse1 = await WareHouse.create(
        {
            name: 'Склад №1',
            adress: 'г. Москва, ул. Каспийская 22 к1 стр 5, офис 203', 
            phoneNumber: '79332451356',
        });

    const warehouse2 = await WareHouse.create(
        {
            name: 'Склад №2',
            adress: 'г. Красноярск, ул. Молокова 69 стр 7', 
            phoneNumber: '79338659402',
        });

    const warehouses = [
        warehouse1,
        warehouse2,
    ];
  
    let warehouse;
    for (let i; i < warehouses.length; i++) {
        warehouse = warehouses[i];
        await DeliveryAdress.create(warehouse);
        i++;
    }
  }

module.exports = { seedWarehouses };