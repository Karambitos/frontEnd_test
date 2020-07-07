'use strict';
{
    console.warn('Задание 1')

    const name = 'Генератор защитного поля';
    let price = 1000;

    console.log(`'Выбран «${name}», цена за штуку ${price} кредитов`);

    price = 2000;

    console.log(`'Выбран «${name}», цена за штуку ${price} кредитов`);

}

{
    console.warn('Задание 2')

    const total = 100;
    let ordered = prompt('Какое количества товаров Вам необходимо?');

    if (Number(ordered)>total) {
        console.log("На складе недостаточно твоаров!")
    } else {
        console.log("Заказ оформлен, с вами свяжется менеджер")
    }
  
}

{
    console.warn('Задание 3')

    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message = prompt('Введите ваш пароль');
    switch(message) {
        case null:
            console.log("Отменено пользователем!");
            break;
        case '':
            console.log("Вы ни чего не ввели!");
            break;
        case ADMIN_PASSWORD: 
            console.log("Добро пожаловать!");
            break;
        default:
            console.log("Доступ запрещен, неверный пароль!");
            break;
    }
    alert(message);
}

{
    console.warn('Задание 4')

    let credits = 23580;
    const pricePerDroid = 3000;

    let droidOrder = prompt('Какое количество дроидов Вам необходимо?');
    
      if (droidOrder === null) {
        console.log("Отменено пользователем!");
      } else {
        let totalPrice = (pricePerDroid * Number(droidOrder));
        if(credits < totalPrice){
            console.log('Недостаточно средств на счету!')
        } else {
            credits -= totalPrice;
            console.log(`Вы купили [${droidOrder}] дроидов, на счету осталось ${credits} кредитов.`)
        }
      }
}


{
    console.warn('Задание 5')
    let countryImput = (prompt('В какую страну Вы хотите оформить доставку товара?')).toLowerCase();
    let countryDelivery = countryImput[0].toUpperCase().concat(countryImput.slice(1, ));
    switch(countryDelivery) {
        case 'Китай':
            console.log(`Доставка в [${countryDelivery}] будет стоить [100] кредитов`);
            break;
        case 'Чили':
            console.log(`Доставка в [${countryDelivery}] будет стоить [250] кредитов`);
            break;
        case 'Австралия': 
            console.log(`Доставка в [${countryDelivery}] будет стоить [170] кредитов`);
            break;
        case 'Индия': 
            console.log(`Доставка в [${countryDelivery}] будет стоить [80] кредитов`);
            break;
        case 'Ямайка': 
            console.log(`Доставка в [${countryDelivery}] будет стоить [120] кредитов`);
            break;

        default:
            alert('В вашей стране доставка не доступна');
            break;
    }
}
