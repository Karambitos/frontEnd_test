'use strict';

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-nex',
      prevEl: '.swiper-button-pre',
    },
  });

// {
//     console.warn('Задание 1')
//     const name = 'Генератор защитного поля';
//     let price = 1000;
//     console.log(`'Выбран «${name}», цена за штуку ${price} кредитов`);
//     price = 2000;
//     console.log(`'Выбран «${name}», цена за штуку ${price} кредитов`);
// }

// {
//     console.warn('Задание 2')
//     const total = 100;
//     let ordered = prompt('Какое количества товаров Вам необходимо?');
    
//     if(ordered === null){
//         console.log("Отменено пользователем!");
//         } else if(Number.parseInt(ordered) <= total){
//             ordered = Number.parseInt(ordered);
//             console.log(`Заказ оформлен, с вами свяжется менеджер [${ordered}.шт]`);
//         } else {
//             ordered = Number.parseInt(ordered);
//             console.log(`На складе недостаточно твоара [${ordered}.шт]!`);
//         }
// }

// {
//     console.warn('Задание 3')
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message = prompt('Введите ваш пароль');
//     switch(message) {
//         case null:
//             console.log("Отменено пользователем!");
//             break;
//         case '':
//             console.log("Вы ни чего не ввели!");
//             break;
//         case ADMIN_PASSWORD: 
//             console.log("Добро пожаловать!");
//             break;
//         default:
//             console.log("Доступ запрещен, неверный пароль!");
//     }
//     alert(message);
// }

// if(ordered === null){
//     console.log("Отменено пользователем!");
//     } else if(typeof ordered === "string"){
//         console.log("Введите число!");
//     }else if(Number.parseInt(ordered) <= total){
//         console.log("Заказ оформлен, с вами свяжется менеджер");
//     } else {
//         console.log("На складе недостаточно твоаров!");
//     }

// {
//     console.warn('Задание 4')
//     let credits = 23580;
//     const pricePerDroid = 3000;
//     let droidOrder = prompt('Какое количество дроидов Вам необходимо?');
//       if (droidOrder === null) {
//         console.log("Отменено пользователем!");
//       } else if(Number.parseInt(droidOrder) >= 1){
//         let totalPrice = (pricePerDroid * Number.parseInt(droidOrder));
//         if(credits < totalPrice){
//             console.log('Недостаточно средств на счету!')
//         } else {
//             credits -= totalPrice;
//             console.log(`Вы купили [${Number.parseInt(droidOrder)}] дроидов, на счету осталось ${credits} кредитов.`)
//         }
//       } else {
//         console.log(`Вы ввели не числовое значение!`)

//       }
// }

// {
//     console.warn('Задание 5')
//     let countryImput = (prompt('В какую страну Вы хотите оформить доставку товара?')).toLowerCase();
//     let countryDelivery = countryImput[0].toUpperCase().concat(countryImput.slice(1, ));
//     switch(countryDelivery) {
//         case 'Китай':
//             console.log(`Доставка в [${countryDelivery}] будет стоить [100] кредитов`);
//             break;
//         case 'Чили':
//             console.log(`Доставка в [${countryDelivery}] будет стоить [250] кредитов`);
//             break;
//         case 'Австралия': 
//             console.log(`Доставка в [${countryDelivery}] будет стоить [170] кредитов`);
//             break;
//         case 'Индия': 
//             console.log(`Доставка в [${countryDelivery}] будет стоить [80] кредитов`);
//             break;
//         case 'Ямайка': 
//             console.log(`Доставка в [${countryDelivery}] будет стоить [120] кредитов`);
//             break;
//         case 'Украина': 
//             console.log(`Доставка в [${countryDelivery}] будет стоить [100500] кредитов + страховка УкрПОЧТЫ [999 000 грн]`);
//             break;
//         default:
//             alert('В вашей стране доставка не доступна');
//             console.log('В вашей стране доставка не доступна');
//             break;
//     }
// }

// {
//     console.warn('Задание 6')

//     let input = 0;
//     let total = 0;

//     input = prompt('Ввведите число');
//     total += Number(input);

//     while (!(input === null)) {
//         input = prompt('Ввведите число');
//         total += Number(input);
//         console.log(total);
//     }
//         console.log(`Общая сумма чисел равна [${total}]`);
// }
