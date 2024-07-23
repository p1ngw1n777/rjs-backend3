const { Category } = require('../models/model.js');
const sequelize = require('../db.js')

async function seedCategories() {
    await sequelize.sync();
    const parentLashCategory = await Category.create(
        {        
            category_name: 'Ресницы', 
            category_url_photo: 'https://dominilash.ru/upload/iblock/b15/k7vskbaoz4cb1m6jolx0x04z4n2ekcij/Ellipse-1881.png' 
        });
    const parentGlueCategory = await Category.create(
        { 
            category_name: 'Клей', 
            category_url_photo: 'https://dominilash.ru/upload/iblock/10a/d993wprcus8wescxk1flu2bm0u7xjbp5/Ellipse-1883.png'
        });

    const parentPreparationCategory = await Category.create(
        {
            category_name: 'Препараты',
            category_url_photo: 'https://dominilash.ru/upload/iblock/067/u04jm6o0qo0dnulfyv4vda2riplipaj3/Ellipse-1884.png'
        }
    );
    
    const parentTwizersCategory = await Category.create(
        {
            category_name: 'Пинцеты и ножницы',
            category_url_photo: 'https://dominilash.ru/upload/iblock/341/d896vt3naldx1fandg25ij6dsh0gy43v/Ellipse-1885.png'
        }
    );

    const parentConsumablesCategory = await Category.create(
        {
            category_name: 'Расходные материалы',
            category_url_photo: 'https://dominilash.ru/upload/iblock/15f/w01bzi5ch28prgjoq59szt48lnfmihsf/Ellipse-1886.png'
        }
    );
    
    const parentDopOborudovanieCategory = await Category.create(
        {
            category_name: 'Доп оборудование',
            category_url_photo: 'https://dominilash.ru/upload/iblock/274/q8ptod4rhsen17capt4j75cyqorb83bt/Ellipse-1882.png'
        }
    );

    const childLashesBlackCategory = await Category.create(
        { 
            category_name: 'Черные', 
            categoryId: parentLashCategory.id 
        });
    const childLashesBrownCategory = await Category.create(
        { 
            category_name: 'Коричневые', 
            categoryId: parentLashCategory.id 
        });
    const childLashesColorCategory = await Category.create(
        { 
            category_name: 'Цветные', 
            categoryId: parentLashCategory.id 
        });
  
    const categories = [
        parentLashCategory,
        parentGlueCategory,
        parentPreparationCategory,
        parentTwizersCategory,
        parentConsumablesCategory,
        parentDopOborudovanieCategory,
        childLashesBlackCategory,
        childLashesBrownCategory,
        childLashesColorCategory
    ];
  
    let category;
    for (let i; i < categories.length; i++) {
        category = categories[i];
        await Category.create(category);
        i++;
    }
    // for (const category of categories) {
    //   await Category.create(category);
    // }
  }

module.exports = { seedCategories };