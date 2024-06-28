const { DeliveryAdress, User } = require('../models/model.js');


async function seedAddress() {
    const idUser = await User.findOne(
        {
            attributes: ['id', 'login'],
            where: {
                login: 'usert14'
            }
        }
    )

    const addresUser = await DeliveryAdress.create(
        { 
            adress: 'г. Москва, ул. Каспийская 22 к1 стр 5, офис 203', 
            userId: idUser.id
        });

    const addresses = [
        addresUser
    ];
  
    let address;
    for (let i; i < addresses.length; i++) {
        address = addresses[i];
        await DeliveryAdress.create(address);
        i++;
    }
  }

module.exports = { seedAddress };