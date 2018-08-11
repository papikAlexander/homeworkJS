'use strict'

/*
Бывает, что нам нужно отсортировать список клиентов по убыванию сумм их покупок. 
Все суммы покупок доступны в свойстве orders.

Описание функции
Реализовать функцию compareByTotalSumm, которая принимает два объекта пользователя и возвращает 1, 
если второй объект имеет сумму покупок больше первого, 0, если суммы покупок равны, и -1, 
если второй объект имеет меньшую сумму покупок.

left — клиент из массива clients, объект
right — клиент из массива clients, объект
Возвращает 1, 0 или -1. Для того, чтобы получить общую сумму объекта left или right, 
нужно просуммировать все элементы массива в свойстве orders.

Функция будет использоваться для передачи в метод sort массива.

Пример использования функции

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));
Если функция compareByTotalSumm реализована правильно, то вы увидите такой результат:


Филип Фрай
Бендер Сгибатель Родригес
Доктор Джон Зоидберг
Процесс реализации
Создайте функцию compareByTotalSumm.
Посчитайте сумму продаж для клиента из аргумента left.
Посчитайте сумму продаж для клиента из аргумента right.
Сравните их и верните результат.
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

function compareByTotalSumm(left, right){
    function sum(array){
        return array.reduce((sum, el) => sum + el, 0);
    }
    
    let resLeft = sum(left.orders);
    let resRight = sum(right.orders);
    
    if (resLeft > resRight) {
        return -1;
    } else if (resLeft == resRight){
        return 0;
    } else {
        return 1;
    }

}


clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));