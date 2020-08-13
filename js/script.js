'use strict';
console.warn('---------модуль 5------------')

// {
//   console.warn('Задание 1')
//
//   // Напиши функцию-конструктор Account,
//   // которая создает объект со свойствами login и email.
//   // В prototype функции-конструктора добавь метод getInfo(),
//   // который выводит в консоль значения полей login и email объекта который его вызвал.
//
//   const Account = function ({login, email}){
//     this.login = login;
//     this.email = email;
//   };
//
//   Account.prototype.getInfo = function(){
//       console.log(`Login: ${this.login}, Email: ${this.email}`)
//   }
//
//   console.log(Account.prototype.getInfo); // function
//
//   const mango = new Account({
//     login: 'Mangozedog',
//     email: 'mango@dog.woof',
//   });
//
//   console.log(mango)
//   mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//
//   const poly = new Account({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });
//
//   poly.getInfo(); // Login: Poly, Email: poly@mail.com
// }

// {
//     console.warn('Задание 2')
//
//     // Напиши класс User для создания пользователя со следующим свойствами:
//     //
//     // name - строка
//     // age - число
//     // followers - число
//     // Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
//
//     class User {
//         constructor({name, age, followers}) {
//             this.name = name;
//             this.age = age;
//             this.followers = followers;
//         }
//         getInfo(){
//             console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//         }
//     }
//
//     const mango = new User({
//         name: 'Mango',
//         age: 2,
//         followers: 20,
//     });
//
//     mango.getInfo(); // User Mango is 2 years old and has 20 followers
//
//     const poly = new User({
//         name: 'Poly',
//         age: 3,
//         followers: 17,
//     });
//
//     poly.getInfo(); // User Poly is 3 years old and has 17 followers
// }

// {
//     console.warn('Задание 3')
//     // Напиши класс Storage, который будет создавать объекты для управления
//     // складом товаров. При вызове будет получать один аргумент - начальный
//     // массив товаров, и записывать его в свойство items.
//     //
//     // Добавь методы класса:
//     //
//     // getItems() - возвращает массив текущих товаров
//     // addItem(item) - получает новый товар и добавляет его к текущим
//     // removeItem(item) - получет товар и, если он есть, удаляет его из текущих
//
//     class Storage{
//         constructor(arr){
//            this.items = arr;
//         }
//         getItems(){
//            return  this.items;
//         }
//         addItem(item){
//             this.items.push(item);
//         }
//
//         removeItem(item){
//             let arr = this.items;
//             for (let i = 0; i < arr.length; i++) {
//                if(arr[i] === item){
//                    this.items.splice(arr[i], 1)
//                }
//
//             }
//         }
//     }
//
//
//     const storage = new Storage([
//         'Нанитоиды',
//         'Пролонгер',
//         'Железные жупи',
//         'Антигравитатор',
//     ]);
//
//     const items = storage.getItems();
//     console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
//
//     storage.addItem('Дроид');
//     console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
//
//     storage.removeItem('Пролонгер');
//     console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
// }

{
    console.warn('Задание 4')
    // Напиши класс StringBuilder. На вход он получает один параметр -
    // строку, которую записывает в свойство _value.
    //
    // Добавь классу следующий функционал:
    //
    // Геттер value - возвращает текущее значение поля _value
    // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
    // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
    // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

    class StringBuilder {
        constructor() {
        }
    }



    const builder = new StringBuilder('.');

    builder.append('^');
    console.log(builder.value); // '.^'

    builder.prepend('^');
    console.log(builder.value); // '^.^'

    builder.pad('=');
    console.log(builder.value); // '=^.^='
}

{
    console.warn('Задание 5')
}


console.warn('---------модуль 4------------')

// {
//   console.warn('Задание 1')
//   //Расставь отсутствующие this в методах объекта account.
//
//   const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
// }

// {
//   console.warn('Задание 2')
//
//   const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);
//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);
//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };
//
//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };
//
//   invokeInventoryAction('Medkit', inventory.add.bind(inventory));
//       // Invoking action on Medkit
//       // Adding Medkit to inventory
//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
//
//   invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
//       // Invoking action on Gas mask
//       // Removing Gas mask from inventory
//   console.log(inventory.items); // ['Knife', 'Medkit']
//
// }

console.warn('---------модуль 3------------')

// {
//   console.warn('Задание 1')
//
// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
//     const user = {
//       name: 'Mango',
//       age: 20,
//       hobby: 'html',
//       premium: true,
//     };
//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
//
//   // for .. of
//   const keys = Object.keys(user); // ["name", "stars", "capacity"]
//   for (const key of keys) {
//     // console.log(`${key}: ${user[key]}`);
//   }
//
//   // for .. in
//   for (const key in user) {
//     // console.log(`${key}: ${user[key]}`);
//   }
//
//   // Object.entries()
//   const entries = Object.entries(user);
//   for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
//   }
// }

// {
//   console.warn('Задание 2')
//
//   // Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
//   const countProps = function(obj) {
//     // твой код
//     const entries = Object.entries(obj);
//     return entries.length;
//   };
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countProps({})); // 0
//
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
//
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
// }

// {
//   console.warn('Задание 3')
//   //// Напиши функцию findBestEmployee(employees), которая принимает
//   // объект сотрудников и возвращает имя самого продуктивного
//   // (который выполнил больше всех задач). Сотрудники и кол-во
//   // выполненых задач содержатся как свойства объекта в формате
//   // "имя":"кол-во задач".
//   const findBestEmployee = function (employees) {
//
//     //// Топ 1
//     let bestValue = 0;
//     let bestEmp;
//     for (const key in employees) {
//       if (employees[key] > bestValue) {
//         bestValue = employees[key];
//         bestEmp = key;
//       }
//     }
//     return bestEmp;
//
//   //// Топ 2
//   //   const employeesArr = Object.entries(employees);
//   //   let bestValue = employeesArr[0][1];
//   //   let bestName = employeesArr[0][0];
//   //   for (const employee of employeesArr) {
//   //     if (employee[1] > bestValue){
//   //       bestName = employee[0];
//   //     }
//   //   }
//   //   return bestName;
//
//
//   //// Вариант дно
//   // let employeesArr = Object.values(employees);
//   //
//   // let bestEmployee = employeesArr[0];
//   // let bestEmployeeName;
//   //
//   // for (let i = 1; i < employeesArr.length; i++){
//   //   if (employeesArr[i] > bestEmployee){
//   //     bestEmployee = employeesArr[i];
//   //   }
//   // }
//   // for (const employee in employees) {
//   //   if (employees[employee] === bestEmployee){
//   //     bestEmployeeName = employee;
//   //   }
//   // }
//   // return bestEmployeeName;
//   };
//
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence
//
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango
//
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
// }w

// {
//     console.warn('Задание 4')
//
//   const countTotalSalary = function(employees) {
//     // твой код
//     let total = 0;
//     let employeesArr = Object.values(employees);
//     for (const employee of employeesArr) {
//       total += employee;
//     }
//     return total;
//   };
//
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countTotalSalary({})); // 0
//
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330
//
//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); // 400
// }

// {
//     console.warn('Задание 5')
//
//   //Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и
//   // имя свойства. Возвращает массив значений определенного свойства prop
//   // из каждого объекта в массиве.
//
//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
//
//   const getAllPropValues = function(arr, prop) {
//     // твой код
//     let newArr = [];
//     for (const arrElement of arr) {
//       if (arrElement[prop]){
//         newArr.push(arrElement[prop]);
//       }
//     }
//     return newArr;
//   };
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
//
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
//
//   console.log(getAllPropValues(products, 'category')); // []
// }

// {
//     console.warn('Задание 6')
//   // Напиши функцию calculateTotalPrice(allProdcuts, productName),
//   // которая получает массив объектов и имя продукта (значение свойства name).
//   // Возвращает общую стоимость продукта (цена * количество).
//   // Вызовы функции для проверки работоспособности твоей реализации.
//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
//
//   const calculateTotalPrice = function(allProdcuts, productName) {
//     // твой код
//     for (const prodcut of allProdcuts) {
//       if (prodcut.name === productName){
//         return prodcut.price * prodcut.quantity;
//       }
//     }
//   };
//
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(calculateTotalPrice(products, 'Радар')); // 5200
//
//   console.log(calculateTotalPrice(products, 'Дроид')); // 2800
// }

// {
//   console.warn('Задание 7')
//   // Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в
//   // котором необходимо реализовать методы для работы с балансом и историей транзакций.
//
//   /*
//    * Типов транзацкий всего два.
//    * Можно положить либо снять деньги со счета.
//    */
//
//   const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//   };
//
//   /*
//    * Каждая транзакция это объект со свойствами: id, type и amount
//    */
//   let id = 0;
//   const account = {
//     // Текущий баланс счета
//     balance: 0,
//     // История транзакций
//     transactions: [],
//
//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//     createTransaction(amount, type) {
//       let key = amount;
//       let value = type;
//       id += 1;
//       return {id: id, sum: key, trans: value};
//
//     },
//
//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//     deposit(amount) {
//       let depositTransaction = this.createTransaction(amount, 'deposit');
//       this.balance += amount;
//       this.transactions.push(depositTransaction)
//     },
//
//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//     withdraw(amount) {
//       let withdrawTransaction = this.createTransaction(amount, 'withdraw');
//       if (this.balance > amount){
//         this.balance = (this.balance - amount);
//         this.transactions.push(withdrawTransaction);
//       } else {
//         console.log('Cнятие такой суммы не возможно, недостаточно средств');
//       }
//     },
//
//     /*
//      * Метод возвращает текущий баланс
//      */
//     getBalance() {
//       console.log(this.balance);
//     },
//
//     /*
//      * Метод ищет и возвращает объект транзакции по id
//      */
//     getTransactionDetails(id) {
//       for (const accountKey of this.transactions){
//         if (accountKey.id === id){
//           return accountKey;
//         }
//       }
//     },
//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//     getTransactionTotal(type) {
//       let transactionSum = 0;
//       for (const accountKey of this.transactions){
//         if (accountKey.trans === type){
//           transactionSum += accountKey.sum
//         }
//       }
//       return transactionSum;
//     },
//   };
//
//
//   account.deposit(300);
//   account.deposit(300);
//   account.deposit(300);
//   account.deposit(100);
//   account.withdraw(200);
//   account.withdraw(100);
//   account.withdraw(1100);
//   account.getBalance();
//   console.log(account.transactions);
//   console.log(account.getTransactionTotal('deposit'));
//   console.log(account.getTransactionTotal('withdraw'));
//   console.log(account.getTransactionDetails(6));
// }

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
//   while (!(input === null)) {
//     if (isNaN(Number.parseInt(input))){
//         console.log('Было введено не число, попробуйте еще раз');
//         input = prompt('Введите число');
//       } else {
//           input = Number.parseInt(input);
//           numbers.push(input);
//           input = prompt('Введите число');
//       }
//   }
//   for (const number of numbers) {
//     total += number ;
//   }
//   console.log(numbers)
//   console.log(`Общая сумма чисел равна [${total}]`);
// }

// {
//   console.warn('Задание 7')
//
//   const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
//   const isLoginValid = function(login) {
//     let isValid = ((login.length >= 4) && (login.length <= 16));
//     return isValid ? true : console.log('Ошибка! Логин должен быть от 4 до 16 символов -', login);
//   };
//   const isLoginUnique = function(allLogins, login) {
//     let isUnique = allLogins.includes(login);
//     return isUnique ? console.log('Такой логин уже используется! -', login) : true;
//   };
//
//   const addLogin = function(allLogins, login) {
//     // твой код
//     if (isLoginValid(login) && isLoginUnique(allLogins, login)){
//       allLogins.push(login);
//       console.log('Логин успешно добавлен! -', login);
//       return allLogins;
//     }
//       return allLogins;
//   }
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
//   console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
//   console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//   console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// }


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
