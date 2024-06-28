const { User, Transaction } = require('../models/model.js');

async function dateOfNow () {
    return current = new Date().getTime();;
}

async function seedTransactions() {
    const idUser = await User.findOne(
        {
            attributes: [ 'id', 'login'],
            where: {
                login: 'usert14'
            }
        }
    )

    let dateNowGo = await dateOfNow();

    const transaction1 = await Transaction.create(
        { 
            count: '1000', 
            type: true,
            date: dateNowGo,
            userId: idUser.id,
        });

    const transaction2 = await Transaction.create(
        { 
            count: '500', 
            type: false,
            date: dateNowGo,
            userId: idUser.id,
        });
    
    const transaction3 = await Transaction.create(
        { 
            count: '250', 
            type: true,
            date: dateNowGo,
            userId: idUser.id,
        });
  
    const transactions = [
        transaction1,
        transaction2,
        transaction3
    ];
  
    let transaction;
    for (let i; i < transactions.length; i++) {
        transaction = transactions[i];
        await Transaction.create(transaction);
        i++;
    }
  }

module.exports = { seedTransactions };