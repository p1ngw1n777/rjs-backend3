const { Review } = require('../models/model.js');


async function seedReviews() {
    const review1 = await Review.create(
        { 
            photo: 'https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp', 
            name: 'Юлия',
            surname: 'Доровских',
            text: 'Заказываю доставку через почту, всегда все быстро! Спасибо. За Клей Х отдельное спасибо, сейчас работаем только на нем, отлично справляется и с классикой, и с объемами.',
            wphoto: 'https://dominilash.ru/upload/medialibrary/9e4/3gn1q3b5ccxrka0k1sxwqtmhr2akmwe3/4.JPG'
        });
    
    const review2 = await Review.create(
        { 
            photo: 'https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp', 
            name: 'Мария',
            surname: 'Потапчик',
            text: 'Самый лучший магазин. Вежливые менеджеры, продукция топ! Всегда все во время отправят, упаковка всегда целая. Клея свежие. Я уже второй год на этой продукции.',
            wphoto: 'https://dominilash.ru/upload/medialibrary/bbe/azabduldluvn9u2mhwan38ilj1j08d24/3.jpg'
        });
    
    const review3 = await Review.create(
        { 
            photo: 'https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp', 
            name: 'Мария',
            surname: 'Привалова',
            text: 'Я очень довольна качеством материалов. Ранее заказывала реснички и клей, они пушка',
            wphoto: 'https://dominilash.ru/upload/medialibrary/f78/e1jspl9vaiwn3yh06k72ecjb88jud0w8/2.jpg'
        });

    const review4 = await Review.create(
        { 
            photo: 'https://dominilash.ru/upload/resize_cache/iblock/1bc/e7hnkvrpsew9v4l14di4zl8rywrrgje1/70_10000_0/islands_150-_1_.webp', 
            name: 'Анна',
            surname: 'Шитикова',
            text: 'Любимый магазин с материалами, у которых вообще нет брака. И расположение магазина очень радует. Рядом метро Царицыно',
            wphoto: 'https://dominilash.ru/upload/medialibrary/4d8/qpqdan5yoepxscigmt34jl91ztpxpkxh/1.jpg'
        });

    const reviews = [
        review1,
        review2,
        review3,
        review4
    ];
  
    let review;
    for (let i; i < reviews.length; i++) {
        review = reviews[i];
        await Review.create(review);
        i++;
    }
  }

module.exports = { seedReviews };
