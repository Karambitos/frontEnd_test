'use strict';

   console.warn('---------модуль 2------------')

// {
//     console.warn('Задание 1')
//     const logItems = function(array) {
//       for (let i = 0; i < array.length; i++) {
//         console.log([i+1] + ' - ' + array[i])
//       }
//     };
//
//     logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//
//     logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// }

// {
//   console.warn('Задание 2')
//   const calculateEngravingPrice = function(message, pricePerWord) {
//     let arr = message.split(' ');
//     let total = arr.length * pricePerWord;
//     console.log(total)
//   };
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   );
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   );
//   calculateEngravingPrice(
//     'Donec orci lectus aliquam est magnis',
//     40,
//   );
// }

// {
//   console.warn('Задание 3')
//   const findLongestWord = function(string) {
//     let arr = string.split(' ');
//     let longWord = arr[1];
//     for (let i = 0; i < arr.length; i++) {
//       let word = arr[i]; //3
//       if (word.length > longWord.length){
//         longWord = word;
//         console.log('longWord', longWord);
//       }
//     }
//   };
//   findLongestWord('The quick brown fox jumped over the lazy dog');
//   findLongestWord('Google do a roll');
//   findLongestWord('May the force be with you');
// }

// {
//   console.warn('Задание 4')
//
//   const formatString = function(string) {
//     if (string.length > 40){
//       let add = '...';
//       let result = string.slice(0, 40);
//       result = result.split(' ').concat(add);
//       result = result.join(' ');
//       string = result;
//     }
//     return string;
//   };
//
//   /*
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка
//
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка
//
//   console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка
//
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
// // вернется форматированная строка
// }

// {
//   console.warn('Задание 5')
//
//   const checkForSpam = function(message) {
//     message = message.toLowerCase();
//     message = message.includes('spam') || message.includes('sale');
//     return message;
//     // let result = false;
//     // let lowerMessage = message.toLowerCase();
//     // // let spam = lowerMessage.indexOf('spam');
//     // // let sale = lowerMessage.indexOf('sale');
//     // // if(spam !== -1 || sale !== -1) {
//     // //   result = true;
//     // // }
//     //
//     // let spam = 'spam';
//     // let sale = 'sale';
//     // if (lowerMessage.includes(spam) || lowerMessage.includes(sale)) {
//     //   result = true;
//     // }
//     // return result;
//   };
//
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(checkForSpam('Latest technology news')); // false
//
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
//
//   console.log(checkForSpam('Get best sale offers now!')); // true
//
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// }

// {
//   console.warn('Задание 6')
//
//   let input = prompt('Введите число');
//   const numbers = [];
//   let total = 0;
//
//     while (!(input === null)) {
//         input = Number.parseInt(input);
//         numbers.push(input);
//         input = prompt('Введите число');
//         }
//     for (const number of numbers) {
//       total += number ;
//     }
//   console.log(numbers)
//   console.log(`Общая сумма чисел равна [${total}]`);
// }

{
  console.warn('Задание 7')

  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

  const isLoginValid = function(login) {
    if (!((login.length >= 4) && (login.length <= 16))) {
       console.log('Ошибка! Логин должен быть от 4 до 16 символов');
      return false;
    }
    return true;
  };

  const isLoginUnique = function(allLogins, login) {
    if (allLogins.includes(login)) {
      console.log('Такой логин уже используется!');
      return false;
    }
    return true;
  };

  const addLogin = function(allLogins, login) {
    // твой код
    let f1 = isLoginValid(login);
    let f2 = isLoginUnique(allLogins, login);
    if (f1 && f2){
      allLogins.push(login);
      return allLogins;
    }
      return allLogins;
  }
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
  console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
  console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
}


   console.warn('---------модуль 1------------')

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
//
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
//
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

// {
//     console.warn('Задание 4')
//
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
//
//       }
// }

// {
//     console.warn('Задание 5')
//
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
//
//     let input = 0;
//     let total = 0;
//     input = prompt('Введите число');
//     total += Number(input);
//     while (!(input === null)) {
//         input = prompt('Введите число');
//         total += Number(input);
//         console.log(total);
//     }
//         console.log(`Общая сумма чисел равна [${total}]`);
// }
