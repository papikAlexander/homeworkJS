'use strict'

/*
Задача № 1. Поиск клиентов.
У нас огромная база клиентов. В массиве clients представлен её фрагмент для экспериментов. 
Нам нужно реализовать возможность получить всю информацию о клиенте по его имени.

Описание функции
Реализовать метод findByName в массиве clients, который будет принимать имя клиента и 
возвращать объект клиента с таким именем (свойство name, строгое соответствие). 
Метод принимает следующие аргументы:

name — имя клиента, строка
Функция должна вернуть объект клиента с таким именем, либо undefined, если такого клиента нет в нашем списке.

Пример использования функции

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined
Процесс реализации
Создайте свойство в массиве clients с именем findByName, присвоив туда функцию.
В теле функции найдите подходящий элемент самым оптимальным и очевидным способом.
Верните найденный объект или undefined.
Убедитесь, что пример использования функции работает так, как описано выше. 
И попробуйте свои варианты использования созданного метода.
*/

const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
    orders: [ 11700, 1980, 450, 5500 ]
}, {
    name: 'Бендер Сгибатель Родригес',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
    orders: [ 440, 226, 7650, 2990, 70 ]
}, {
    name: 'Доктор Джон Зоидберг',
    email: 'zoidberg-md@list.un',
    isSubscribed: true,
    orders: [ 720 ]
}];

clients.findByName = function (name){
    if(typeof(name) != 'string'){
        return undefined;
    }

    return this.find(element => {return element.name == name});

};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

