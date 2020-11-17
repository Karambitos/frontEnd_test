"use strict";

console.warn("---------модуль 7------------");

console.warn("Задание 1");
const categoriesRef = document.getElementById("categories");
console.log(`В списке ${categoriesRef.children.length} категории.`);
// const categoriesItemsRef1 = categoriesRef.querySelectorAll("li.item");
// categoriesItemsRef1.forEach((categoriesItem) => {
//     console.log(`Категория: ${categoriesItem.firstElementChild.textContent}`);
//     console.log(
//         `Количество элементов: ${categoriesItem.lastElementChild.children.length}`
//     );
// });
const categoriesItemsRef = Array.from(categoriesRef.children);
categoriesItemsRef.forEach((categoriesItem) => {
  console.log(`Категория: ${categoriesItem.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${categoriesItem.lastElementChild.children.length}`
  );
});

console.warn("Задание 2");
const ingredientsList = document.getElementById("ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let createLi = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
ingredientsList.insertAdjacentHTML("beforeend", createLi);
// ingredients.map((ingredient) => {
//     const ingredientsItem = document.createElement("li");
//     ingredientsItem.textContent = ingredient;
//     ingredientsList.append(ingredientsItem);
//     return ingredientsList;
// });

console.warn("Задание 3");
// import img from "./images.js";
// const gallery = document.querySelector("#gallery");
// let items = img
//     .map(
//         (el) =>
//         `<li class="li-task03"><img src="${el.url}" alt="${el.alt}" class="img-task03"/></li>`
//     )
//     .join("");
// const galInsert = gallery.insertAdjacentHTML("beforeend", items);

import img from "./images.js";
const galleryList = document.getElementById("gallery");
const galleryItems = img
  .map(
    (img) =>
      `<li class="image-style"><img src="${img.url}" alt="${img.alt}" ></li>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", galleryItems);

console.warn("Задание 4");
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const velueRef = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = Number(velueRef.textContent);
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
function decrement() {
  counterValue -= 1;
  velueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  velueRef.textContent = counterValue;
}
console.warn("Задание 5");
// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector("input#name-input");
let greetingName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  if (event.target.value) {
    greetingName.textContent = event.target.value;
  } else {
    greetingName.textContent = "незнакомец";
  }
});

console.warn("Задание 6");
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
const inputLenghtValid = document.querySelector("input#validation-input");
inputLenghtValid.addEventListener("blur", () => {
  const target = event.target;
  if (Number(target.dataset.length) === target.value.length) {
    target.classList.add("valid");
    target.classList.remove("invalid");
  } else {
    target.classList.add("invalid");
    target.classList.remove("valid");
  }
});

console.warn("Задание 7");
// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.
const inputRange = document.querySelector("input#font-size-control");
const textRef = document.querySelector("#text");

/*
 *   jQuery
 */
// $("#font-size-control").on("input", function () {
//     $('#text').css("font-size", $(this).val() + "px");
// });

/*
 *   JS
 */
// inputRange.addEventListener('input', () => {
//     let target = event.target.value;
//     textRef.style.fontSize = target + "px";
// });

/*
 *   JS задротство
 */
textRef.style.fontSize = "16px";

function fontCalc(bool) {
  if (bool) {
    const newFont = parseInt(textRef.style.fontSize) + 1 + "px";
    textRef.style.fontSize = newFont;
  } else {
    const newFont = parseInt(textRef.style.fontSize) - 1 + "px";
    textRef.style.fontSize = newFont;
  }
}

let defaultInputValue = inputRange.value;
inputRange.addEventListener("input", () => {
  let target = event.target.value;
  if (defaultInputValue < target) {
    defaultInputValue = target;
    console.log("defaultInputValue", defaultInputValue);
    console.log("target", target);
    fontCalc(true);
  } else {
    console.log("defaultInputValue", defaultInputValue);
    console.log("target", target);
    fontCalc(false);
  }
});

console.warn("Задание 8");
const boxes = document.getElementById("boxes");
const squareNum = document.querySelector("#controls > input");
const addSquareBtn = document.querySelector('button[data-action="render"]');
const removeSquareBtn = document.querySelector('button[data-action="destroy"]');

console.log(squareNum.value);

let styleBox = 30;

function createBoxes(amount) {
  for (var i = 0; i < amount; i++) {
    let RGB1 = Math.floor(Math.random() * 255);
    let RGB2 = Math.floor(Math.random() * 255);
    let RGB3 = Math.floor(Math.random() * 255);
    let RGB = RGB1 + "," + RGB2 + "," + RGB3;
    let square = document.createElement("div");
    square.style.background = "rgb(" + RGB + ")";
    square.style.width = styleBox + "px";
    square.style.height = styleBox + "px";
    boxes.append(square);
    styleBox += 10;
  }
}

function destroyBoxes() {
  while (boxes.firstChild) boxes.removeChild(boxes.firstChild);
}

removeSquareBtn.addEventListener("click", () => {
  destroyBoxes();
});

addSquareBtn.addEventListener("click", () => {
  createBoxes(squareNum.value);
});

console.warn("---------модуль 6------------");
// import users from './users.js';
// console.warn('Задание 1');
// const getUserNames = users => {
//   // твой код
//   return users.map((user) => {return user.name})
// };
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// console.warn('Задание 2')
// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).ё
// const getUsersWithEyeColor = (users, color) => {
//   // твой код
//    return users.filter((user) => {
//     return user.eyeColor === color;
//   });
// };
//
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// console.warn('Задание 3');
// // Получить массив имен пользователей по полу (поле gender).
// const getUsersWithGender = (users, gender) => {
//   // твой код
//
//     let usersFilter = users.filter((user) => {
//       return user.gender === gender;
//     });
//     return usersFilter.map((user) => {return user.name})
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// console.warn('Задание 4');
//
// // Получить массив только неактивных пользователей (поле isActive).
// const getInactiveUsers = users => {
//   // твой код
//      return users.filter((user) => {
//       return !user.isActive;
//     });
// };
//
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// console.warn('Задание 5');
//   // Получить пользоваля (не массив) по email (поле email, он уникальный).
//   const getUserWithEmail = (users, email) => {
//     // твой код
//     return users.find((user) => {
//             return user.email === email;
//           });
//           // return usersFilter.map((user) => {return user.name})
//   };
//   console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
//   console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// console.warn('Задание 6');
//   // Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
//
//   const getUsersWithAge = (users, min, max) => {
//     // твой код
//     return users.filter((user) => {
//       return user.age > min && user.age < max;
//     });
//   };
//
//   console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
//   console.log(getUsersWithAge(users, 30, 40));
//   // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// console.warn('Задание 7');
//   // Получить общую сумму баланса (поле balance) всех пользователей.
//   const calculateTotalBalance = users => {
//     // твой код
//     // let total = users.reduce(function (acc, user){
//     //   return acc + user.balance;
//     // }, 0)
//     // return total
//
//     //твой код
//     let total = 0;
//     users.forEach((user) => {
//       total += user.balance;
//     });
//     return total;
//   };
//   console.log(calculateTotalBalance(users)); // 20916

// console.warn('Задание 8');
// // Массив имен всех пользователей у которых есть друг с указанным именем.
//   const getUsersWithFriend = (users, friendName) => {
//       // твой код
//         let arr = [];
//       users.forEach((user) => {
//           user.friends.find(function (elem) {
//               if (elem === friendName){
//                   arr.push(user.name);
//               };
//           });
//       });
//       return arr;
// };
//
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// console.warn('Задание 9');
// // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// const getNamesSortedByFriendsCount = users => {
//     // твой код
//   let sort = [...users].sort(function(prev, next){
//     return prev.friends.length - next.friends.length;
//   });
//   return sort.map((user) => {return user.name})
// };
// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// console.warn('Задание 10');
// // Получить массив всех умений всех пользователей (поле skills),
// // при этом не должно быть повторяющихся умений и они должны
// // быть отсортированы в алфавитном порядке.
//   const getSortedUniqueSkills = users => {
//
// //  Вариант 1
// //     return users.reduce((acc, user) => {
// //       user.skills.forEach((skill) => {
// //         if (!acc.includes(skill)) {
// //           acc.push(skill);
// //         }
// //       });
// //       acc.sort();
// //       return acc;
// //     }, []);
//
// //  Вариант 2
// //   const allSkills = users.reduce(function (userSkills, user){
// //     userSkills.push(...user.skills)
// //     return userSkills;
// //   }, [])
// //   const filterSkills = allSkills.filter((elem, index, arr) => arr.indexOf(elem)==index);
// //   const sortSkills = filterSkills.sort();
// //   return sortSkills;
//
// //  Вариант 3
//   const allSkills = users.reduce(function (userSkills, user){
//     userSkills.push(...user.skills)
//     return userSkills;
//   }, []).filter((elem, index, arr) => arr.indexOf(elem)==index).sort();
//     return allSkills;
// };
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

console.warn("---------модуль 5------------");

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

// {
//     console.warn('Задание 4')
//     // Напиши класс StringBuilder. На вход он получает один параметр -
//     // строку, которую записывает в свойство _value.
//     //
//     // Добавь классу следующий функционал:
//     //
//     // Геттер value - возвращает текущее значение поля _value
//     // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
//     // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
//     // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
//
//     class StringBuilder {
//         constructor(name) {
//             this._value = name;
//         }
//
//         get value() {
//             return this._value;
//         }
//
//         append(str){
//             this._value = this._value + str
//         }
//         prepend(str){
//             this._value = str + this._value
//         }
//         pad(str){
//             this._value =  str + this._value + str
//         }
//     }
//
//     const builder = new StringBuilder('.');
//
//     builder.append('^');
//     console.log(builder.value); // '.^'
//
//     builder.prepend('^');
//     console.log(builder.value); // '^.^'
//
//     builder.pad('=');
//     console.log(builder.value); // '=^.^='
// }

// {
//   console.warn('Задание 5')
//   // Напиши класс Car с указанными свойствами и методами.
//   class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */
//     static  getSpecs(obj) {
//         const entries = Object.entries(obj);
//         let arr = [];
//         let value = [];
//         arr.push(...entries);
//         for (const arrElement of arr) {
//           if (arrElement[0] === '_price'){
//             arrElement[0] = 'price'
//             value = value.concat(arrElement)
//           } else {
//             value = value.concat(arrElement)
//           }
//        }
//         console.log(value)
//     }
//     /*
//    * Конструктор получает объект настроек.
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//
//     constructor({speed = 0, price = 0, maxSpeed = 0, isOn = false, distance = 0}) {
//         this.maxSpeed = maxSpeed;
//         this.speed = speed;
//         this.isOn = isOn;
//         this.distance = distance;
//         this._price = price;
//     }
//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */
//       get price() {
//             return this._price;
//         }
//       set price(newPrice) {
//            this._price = newPrice;
//       }
//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn() {
//         this.isOn = true;
//     }
//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//     }
//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {
//         if(this.speed + value < this.maxSpeed){
//             this.speed += value
//         } return
//     }
//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {
//       if(this.speed - value > 0){
//         this.speed -= value
//       } return
//     }
//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {
//       if(this.isOn){
//         this.distance += (hours * this.speed)
//       } return
//     }
// }
//
//     const mustang = new Car({
//       maxSpeed: 200,
//       price: 2000
//     });
//
//
//     mustang.turnOn();
//     mustang.accelerate(50);
//     mustang.drive(2);
//
//     Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
//
//     mustang.decelerate(20);
//     mustang.drive(1);
//     mustang.turnOff();
//
//     Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
//
//     console.log(mustang.price); // 2000
//     mustang.price = 4000;
//     console.log(mustang.price); // 4000
//
//
// }

console.warn("---------модуль 4------------");

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

console.warn("---------модуль 3------------");

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
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
//
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
//
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // Lux
// }

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

console.warn("---------модуль 2------------");

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

console.warn("---------модуль 1------------");

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
