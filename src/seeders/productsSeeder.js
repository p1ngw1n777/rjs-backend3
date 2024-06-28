const { Products, Category } = require('../models/model.js');


async function seedProducts() {
        /*ЧЕРНЫЕ*/
    const categoryProductLashesBlack = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Черные'
            }
        }
    )

    const productLashesBlack1 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Черные Отдельные длины',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/922/a43hxpb33nwhgn16cvn66r66ckiaot07/450_450_140cd750bba9870f18aada2478b24840a/Domini-black-_20-line_-kopiya-3.jpg',
            price: 1050,
            value: 20,
            count: 10,
            categoryId: categoryProductLashesBlack.id
        });
    
    const productLashesBlack2 = await Products.create(
        {
            product_name: 'Ресницы AURA Черные Отдельные длины',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/492/fafpq32npf3kggqnwt3i0r0o8d85xbch/450_450_140cd750bba9870f18aada2478b24840a/aura-black-_16-line_-kopiya-3.jpg',
            price: 690,
            value: 16,
            count: 10,
            categoryId: categoryProductLashesBlack.id
        });

        /*КОРИЧНЕВЫЕ*/

    const categoryProductLashesBrown = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Коричневые'
            }
        }
    )
    
    const productLashesBrown1 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Коричневые Микс',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/288/uzsznwu4ojima9dca3kzy6uc1m1k1e8h/450_450_140cd750bba9870f18aada2478b24840a/Domini-brown-_20-line_-kopiya-3.jpg',
            price: 1310,
            value: 10,
            count: 20,
            categoryId: categoryProductLashesBrown.id
        });
    
    const productLashesBrown2 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Горький шоколад Отдельная длина',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/bc6/00grg66mh6x5ujdpgov69d5ihw65kd6t/450_450_140cd750bba9870f18aada2478b24840a/Domini-dark-chocolate-_20-line_-kopiya-3.jpg',
            price: 1310,
            value: 10,
            count: 20,
            categoryId: categoryProductLashesBrown.id
        });

    const productLashesBrown3 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Темно-Коричневые Микс',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/f85/xv7v4fbkjg2vcwdje5qs3fqxmopzfl52/450_450_140cd750bba9870f18aada2478b24840a/Domini-dark-brown-_20-line_-kopiya-3.jpg',
            price: 1310,
            value: 10,
            count: 20,
            categoryId: categoryProductLashesBrown.id
        });
    
        /*ЦВЕТНЫЕ*/

    const categoryProductLashesColor = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Цветные'
            }
        }
    )

    const productLashesColor1 = await Products.create(
        {
            product_name: 'Ресницы AURA Цветные Neon Forest Микс',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/458/8w4001gprlq880goispo49fsu4yy0ap9/450_450_140cd750bba9870f18aada2478b24840a/resnitsy-katalog10292-1.jpg',
            price: 1990,
            value: 10,
            count: 40,
            categoryId: categoryProductLashesColor.id
        });

    const productLashesColor2 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Омбре Синие Микс',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/a9d/zkbbhzk76eolw462rfka7vst6w45qog6/450_450_140cd750bba9870f18aada2478b24840a/OMBRE-_1_.JPG',
            price: 1580,
            value: 10,
            count: 20,
            categoryId: categoryProductLashesColor.id
        });
    
    const productLashesColor3 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Мультиколор',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/1ee/2eyf597wshihuv24w38ek1pwxidpvt04/450_450_140cd750bba9870f18aada2478b24840a/multi_makro_1.jpg',
            price: 2080,
            value: 10,
            count: 20,
            categoryId: categoryProductLashesColor.id
        });

    const productLashesColor4 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Цветные Зеленые Мик',
            product_url_photo:  'https://dominilash.ru/upload/resize_cache/iblock/1ee/2eyf597wshihuv24w38ek1pwxidpvt04/450_450_140cd750bba9870f18aada2478b24840a/multi_makro_1.jpg',
            price: 820,
            value: 10,
            count: 8,
            categoryId: categoryProductLashesColor.id
        });

    const productLashesColor5 = await Products.create(
        {
            product_name: 'Ресницы DOMINI Неоновые Голубые Микс',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/047/ukkkh1adrumv2y9wkm5fbi5hq6qf0sb5/450_450_140cd750bba9870f18aada2478b24840a/NEON-_4_.JPG',
            price: 820,
            value: 10,
            count: 8,
            categoryId: categoryProductLashesColor.id
        });
    
        /*КЛЕЯ*/
    
    const categoryProductGlue = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Клей'
            }
        }
    )

    const productGlue1 = await Products.create(
        {
            product_name: 'Клей AURA "U"',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/bcc/b6a7sdotj3g7i0s7qdeffx5dh6ngtq85/450_450_140cd750bba9870f18aada2478b24840a/ksyu-katalozhka00043.jpg',
            price: 690,
            value: 10,
            count: 5,
            categoryId: categoryProductGlue.id
        });
    
    
    const productGlue2 = await Products.create(
        {
            product_name: 'Клей DOMINI "Iron"',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/0fa/r3ycqzqfsyzbhlxful8dz10a7nl6z4o3/450_450_140cd750bba9870f18aada2478b24840a/2023_06_23-03.15.55-_2_.PNG',
            price: 1100,
            value: 10,
            count: 790,
            categoryId: categoryProductGlue.id
        });

    const productGlue3 = await Products.create(
        {
            product_name: 'Клей DOMINI "One"',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/c88/72yp8h8dzfz1i0qfz934r2neuumrgzie/450_450_140cd750bba9870f18aada2478b24840a/2023_06_23-03.26.00-_1_.PNG',
            price: 790,
            value: 10,
            count: 5,
            categoryId: categoryProductGlue.id
        });

    const productGlue4 = await Products.create(
        {
            product_name: 'Клей AURA "A"',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/f74/eyg6xxojijritx6gcc0w0m2671mpuqea/450_450_140cd750bba9870f18aada2478b24840a/Dizai_n-bez-nazvaniya_9_.png',
            price: 550,
            value: 10,
            count: 5,
            categoryId: categoryProductGlue.id
        });

    const productGlue5 = await Products.create(
        {
            product_name: 'Клей DOMINI "Celebrity"',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/24c/kpnksk5hdo5wkbj2zt63g4qmrduslfq1/450_450_140cd750bba9870f18aada2478b24840a/2023_06_23-03.15.55-_3_.PNG',
            price: 990,
            value: 10,
            count: 5,
            categoryId: categoryProductGlue.id
        });

    const productGlue6 = await Products.create(
        {
            product_name: 'Клей DOMINI "Aurora"',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/9c6/2xwoy81bznfz4xga76yua23irzkm2gop/450_450_140cd750bba9870f18aada2478b24840a/2023_06_23-03.15.55.PNG',
            price: 990,
            value: 10,
            count: 5,
            categoryId: categoryProductGlue.id
        });

    const productGlue7 = await Products.create(
        {
            product_name: 'Клей DOMINI "X"',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/739/asllujbkx6c7fz3fwnczf1njuanwcrs5/450_450_140cd750bba9870f18aada2478b24840a/2023_06_23-03.15.55-_6_.PNG',
            price: 990,
            value: 10,
            count: 5,
            categoryId: categoryProductGlue.id
        });


        /*препараты*/
    
    const categoryProductPreparation = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Препараты'
            }
        }
    )

    const productPreparaton1 = await Products.create(
        {
            product_name: 'Усилитель DOMINI "Манго"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/7f8/43h3mc4373q9hhtsg63wdjmdf0f92vbv/450_450_140cd750bba9870f18aada2478b24840a/ksyu-ng00014_result.jpg', 
            price: 650,
            value: 10,
            count: 15,
            categoryId: categoryProductPreparation.id
        });
    
    
    const productPreparaton2 = await Products.create(
        {
            product_name: 'Бустер AURA', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/969/zmo66qflno9znl76vtzmkzimlsub4kfr/450_450_140cd750bba9870f18aada2478b24840a/ksyu-katalozhka00032.jpg', 
            price: 650,
            value: 10,
            count: 15,
            categoryId: categoryProductPreparation.id
        });

    const productPreparaton3 = await Products.create(
        {
            product_name: 'Обезжириватель DOMINI "Персик"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/8ae/8sbkw9xf6968fyk3sd68m0pmls1j215s/450_450_140cd750bba9870f18aada2478b24840a/ksyu-ng00011_result.jpg', 
            price: 590,
            value: 10,
            count: 15,
            categoryId: categoryProductPreparation.id
        });

    const productPreparaton4 = await Products.create(
        {
            product_name: 'Обезжириватель AURA', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/e50/ouu088eetcgdggz0nqps0sawanp37cny/450_450_140cd750bba9870f18aada2478b24840a/ksyu-katalozhka00033.jpg', 
            price: 590,
            value: 10,
            count: 15,
            categoryId: categoryProductPreparation.id
        });

    const productPreparaton5 = await Products.create(
        {
            product_name: 'Ремувер крем-гель DOMINI без аромата', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/b3e/ko9ihygwxts15pv0ya9nj3se2ndofi34/450_450_140cd750bba9870f18aada2478b24840a/IMG_3048.JPG', 
            price: 650,
            value: 10,
            count: 15,
            categoryId: categoryProductPreparation.id
        });

    const productPreparaton6 = await Products.create(
        {
            product_name: 'Ремувер кремовый DOMINI Buble Gum', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/c2a/zjkbfmde9ffe41p2ltvqravjkk6c0inu/450_450_140cd750bba9870f18aada2478b24840a/ksyu-katalozhka00133.jpg', 
            price: 850,
            value: 10,
            count: 15,
            categoryId: categoryProductPreparation.id
        });

    const productPreparaton7 = await Products.create(
        {
            product_name: 'Ремувер гелевый DOMINI Pina Colada', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/1a0/nbnuiev4ngt3k0t22nxvbmm3jw2qxwdm/450_450_140cd750bba9870f18aada2478b24840a/IMG_3049.JPG', 
            price: 650,
            value: 10,
            count: 15,
            categoryId: categoryProductPreparation.id
        });

    /*пинцеты*/
    
    const categoryProductTwizers = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Пинцеты и ножницы'
            }
        }
    )

    const productTwizers1 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №1(матовый) "Фламинго 90°"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/db6/czxz595wp62e8c155nmoo02w47e4hrho/450_450_140cd750bba9870f18aada2478b24840a/1..jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });
    
    const productTwizers2 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №2(матовый) "Топорик"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/0ad/dshh9x3yookxoxczkyigcm6bgrxflhl8/450_450_140cd750bba9870f18aada2478b24840a/2..jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });

    const productTwizers3 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №3(матовый) "C-образный"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/09c/fdfquwp0x2jy82f2vfpl6h0twgxgf50y/450_450_140cd750bba9870f18aada2478b24840a/3.jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });

    const productTwizers4 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №4(матовый) "L 45°"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/bd7/s2kcc5bj9vw512tpb8vwwnmq7t8g9rbg/450_450_140cd750bba9870f18aada2478b24840a/4..jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });

    const productTwizers5 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №5(матовый) "Прямой с односторониим заужением"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/131/3mxkrubrb42oh773il17xan3n1uq09me/450_450_140cd750bba9870f18aada2478b24840a/5.jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });

    const productTwizers6 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №6(матовый) "Прямой удлиненный"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/21e/9dx3x9d7hjtkm3ztuz6alf3w57n5b7m2/450_450_140cd750bba9870f18aada2478b24840a/6.jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });

    const productTwizers7 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №7(матовый) "Для выделения, с изгибом"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/f46/l1ei211lvyhq0r16dobzjz9t0rniogt4/450_450_140cd750bba9870f18aada2478b24840a/IMG_3088.jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });

    const productTwizers8 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №8(матовый) "Топорик 65°"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/f86/eu8hi03f75ol88l71b8570dn7p4kzd11/450_450_140cd750bba9870f18aada2478b24840a/8.jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });

    const productTwizers9 = await Products.create(
        {
            product_name: 'Пинцет DOMINI №9(матовый) "Мини сапожок"', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/f7d/qnoif93ka3k8ngjwxfphs2xno2laopmk/450_450_140cd750bba9870f18aada2478b24840a/9.jpg', 
            price: 930,
            value: 10,
            count: 0,
            categoryId: categoryProductTwizers.id
        });
    
        /*РАСХОДНЫЕ МАТЕРИАЛЫ*/
    
    const categoryProductСonsumables = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Расходные материалы'
            }
        }
    )

    const productСonsumables1 = await Products.create(
        {
            product_name: 'Скотч "японский" ультрабелый', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/4d9/yhiev0eagimm85tohkn1ae7x2z4828pe/450_450_140cd750bba9870f18aada2478b24840a/f21f83a3_35ac_11ed_96b3_78321b8a43c7_db7fa77a_35b8_11ed_96b3_78321b8a43c7.resize1.jpg', 
            price: 150,
            value: 10,
            count: 0,
            categoryId: categoryProductСonsumables.id
        });

    const productСonsumables2 = await Products.create(
        {
            product_name: 'Лента пластиковая', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/961/130naqa2t7eoa9ttpwp940uwya5xiid0/450_450_140cd750bba9870f18aada2478b24840a/f21f83a7_35ac_11ed_96b3_78321b8a43c7_db7fa77e_35b8_11ed_96b3_78321b8a43c7.resize1.jpg', 
            price: 150,
            value: 10,
            count: 0,
            categoryId: categoryProductСonsumables.id
        });

    const productСonsumables3 = await Products.create(
        {
            product_name: 'Щеточки нейлон (50 штук)', 
            product_url_photo: 'https://dominilash.ru/upload/iblock/d2a/nutkkpzxf66h7033n8jsfp2ikbkdx41g/f21f83a5_35ac_11ed_96b3_78321b8a43c7_db7fa77c_35b8_11ed_96b3_78321b8a43c7.resize1.jpg', 
            price: 150,
            value: 10,
            count: 0,
            categoryId: categoryProductСonsumables.id
        });

    const productСonsumables4 = await Products.create(
        {
            product_name: 'Патчи гидрогелевые', 
            product_url_photo: 'https://dominilash.ru/upload/iblock/06b/oihbf0i5dkamphc56yo4gh99y1e8a00x/f21f83a4_35ac_11ed_96b3_78321b8a43c7_db7fa77b_35b8_11ed_96b3_78321b8a43c7.resize1.png', 
            price: 150,
            value: 10,
            count: 0,
            categoryId: categoryProductСonsumables.id
        });

    const productСonsumables5 = await Products.create(
        {
            product_name: 'Лунка для клея', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/ee9/z77e65q50tzs6g7vjd5melo6fnesfv80/450_450_140cd750bba9870f18aada2478b24840a/f21f83a2_35ac_11ed_96b3_78321b8a43c7_db7fa779_35b8_11ed_96b3_78321b8a43c7.resize1.jpg', 
            price: 150,
            value: 10,
            count: 0,
            categoryId: categoryProductСonsumables.id
        });

    const productСonsumables6 = await Products.create(
        {
            product_name: 'Скотч бумажный', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/4d7/qnzs35mlmuy9feb0pq1xlh3tvrltozf2/450_450_140cd750bba9870f18aada2478b24840a/f21f83a6_35ac_11ed_96b3_78321b8a43c7_db7fa77d_35b8_11ed_96b3_78321b8a43c7.resize1.jpg', 
            price: 150,
            value: 10,
            count: 0,
            categoryId: categoryProductСonsumables.id
        });

    const productСonsumables7 = await Products.create(
        {
            product_name: 'Микробраши(100шт.)', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/4be/161fk7f86wg84b4tind9pc9so2eo9ny0/450_450_140cd750bba9870f18aada2478b24840a/f21f83a1_35ac_11ed_96b3_78321b8a43c7_db7fa778_35b8_11ed_96b3_78321b8a43c7.resize1.jpg', 
            price: 150,
            value: 10,
            count: 0,
            categoryId: categoryProductСonsumables.id
        });


        /*ДОП ОБОРУДОВАНИЕ*/
    
    const categoryProductDopOborudovanie = await Category.findOne(
        {
            attributes: ['id', 'category_name'],
            where: {
                category_name: 'Доп оборудование'
            }
        }
    )

    const productDopOborudovanie1 = await Products.create(
        {
            product_name: 'Цветовой круг Иттена DOMINI',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/e46/xkduh0ontmtus91okexynj95t2egw2m4/450_450_140cd750bba9870f18aada2478b24840a/cvetovoj_krug_ittena.jpg', 
            price: 440,
            value: 10,
            count: 0,
            categoryId: categoryProductDopOborudovanie.id
        });

    const productDopOborudovanie2 = await Products.create(
        {
            product_name: 'Подушка с эффектом памяти', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/558/dbdpl9hqu7bbs267gh87v5wnd8w50pwo/450_450_140cd750bba9870f18aada2478b24840a/podushka_dlya_shei_s_effektom_pamyati_26120_700x700.jpg', 
            price: 850,
            value: 10,
            count: 0,
            categoryId: categoryProductDopOborudovanie.id
        });

    const productDopOborudovanie3 = await Products.create(
        {
            product_name:  'Подставка под планшет DOMINI',
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/760/2qo1130zjod3tihhg6yl5bndcytzf24i/450_450_140cd750bba9870f18aada2478b24840a/belyi_-pravostoronnii_-stek.jpg', 
            price: 1380,
            value: 10,
            count: 0,
            categoryId: categoryProductDopOborudovanie.id
        });

    const productDopOborudovanie4 = await Products.create(
        {
            product_name:  'Лэшбокс DOMINI на 10 планшетов', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/b21/4tw09xn2dl8en284j2qg0oieq1e2wbtg/450_450_140cd750bba9870f18aada2478b24840a/korb-2-belyi_-stek.jpeg', 
            price: 4100,
            value: 10,
            count: 0,
            categoryId: categoryProductDopOborudovanie.id
        });

    const productDopOborudovanie5 = await Products.create(
        {
            product_name:  'Планшет DOMINI 7,3*14,5 см', 
            product_url_photo: 'https://dominilash.ru/upload/resize_cache/iblock/818/j9nb08wy0jek903oaj567ov9pc8gj4r4/450_450_140cd750bba9870f18aada2478b24840a/planshet-stek.jpeg', 
            price: 250,
            value: 10,
            count: 0,
            categoryId: categoryProductDopOborudovanie.id
        });

    const products = [
        productLashesBlack1,
        productLashesBlack2,

        productLashesBrown1,
        productLashesBrown2,
        productLashesBrown3,

        productLashesColor1,
        productLashesColor2,
        productLashesColor3,
        productLashesColor4,
        productLashesColor5,

        productGlue1,
        productGlue2,
        productGlue3,
        productGlue4,
        productGlue5,
        productGlue6,
        productGlue7,

        productPreparaton1,
        productPreparaton2,
        productPreparaton3,
        productPreparaton4,
        productPreparaton5,
        productPreparaton6,
        productPreparaton7,

        productTwizers1,
        productTwizers2,
        productTwizers3,
        productTwizers4,
        productTwizers5,
        productTwizers6,
        productTwizers7,
        productTwizers8,
        productTwizers9,

        productСonsumables1,
        productСonsumables2,
        productСonsumables3,
        productСonsumables4,
        productСonsumables5,
        productСonsumables6,
        productСonsumables7,

        productDopOborudovanie1,
        productDopOborudovanie2,
        productDopOborudovanie3,
        productDopOborudovanie4,
        productDopOborudovanie5,
    ];
  
    let product;
    for (let i; i < products.length; i++) {
        product = products[i];
        await Products.create(product);
        i++;
    }
  }

module.exports = { seedProducts };
