const { Products, Invoices, WareHouse } = require('../models/model.js');

async function dateOfNow () {
    return current = new Date().getTime();;
}

async function seedInvoices() {
    const idWarehouse = await WareHouse.findOne(
        {
            attributes: ['id', 'name'],
            where: {
                name: 'Склад №1'
            }
        }
    )

    const idWarehouse1 = await WareHouse.findOne(
        {
            attributes: ['id', 'name'],
            where: {
                name: 'Склад №2'
            }
        }
    )

    const idProduct = await Products.findOne(
        {
            attributes: ['id', 'product_name'],
            where: {
                product_name: 'Клей AURA "U"'
            }
        }
    )

    const idProduct1 = await Products.findOne(
        {
            attributes: ['id', 'product_name'],
            where: {
                product_name: 'Обезжириватель AURA'
            }
        }
    )

    const idProduct2 = await Products.findOne(
        {
            attributes: ['id', 'product_name'],
            where: {
                product_name: 'Лунка для клея'
            }
        }
    )

    const invoices1 = await Invoices.create(
        { 
            type: true,
            productId: idProduct.id,
            idWarehouse: idWarehouse.id,
        });

    const invoices2 = await Invoices.create(
        { 
            type: false,
            productId: idProduct1.id,
            idWarehouse: idWarehouse1.id,
        });
    
    const invoices3 = await Invoices.create(
        { 
            type: true,
            productId: idProduct2.id,
            idWarehouse: idWarehouse.id,
        });

    const invoices = [
        invoices1,
        invoices2,
        invoices3
    ];
  
    let invoice;
    for (let i; i < invoices.length; i++) {
        invoice = invoices[i];
        await Invoices.create(invoice);
        i++;
    }
  }

module.exports = { seedInvoices };