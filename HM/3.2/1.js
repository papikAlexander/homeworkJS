'use strict'

/*
Задача № 1. Работа с датой
Для решения различных логистических задач нам нужно усовершенствовать объект Date, добавив туда ряд полезных функций.

Создайте класс SpaceDate, который, кроме базового функционала Date, будет иметь удобный функционал копирования, получения следующего дня и другие функции.

Описание конструктора и экземпляра SpaceDate
Конструктор
Работает точно так же, как и оригинальный конструктор Date.

Экземпляр
Помимо всех методов экземпляра Date, должен иметь следующие методы:

copy
возвращает объект SpaceDate с той же датой и временем, что и исходный;
getNextDate
возвращает объект SpaceDate c тем же временем, но со следующим календарным днём;
getPrevDate
возвращает объект SpaceDate c тем же временем, но с предыдущим календарным днём;
getDayBeginning
возвращает объект SpaceDate c той же датой, но время установлено в 00:00:00.000;
getDayEnd
возвращает объект SpaceDate c той же датой, но время установлено в 23:59:59.999;
Пример использования

let dateOriginal = new SpaceDate(2017, 1, 22);
let dateCopy = dateOriginal.copy();
dateCopy.setYear(2022);
console.log(`Оригинальная дата: ${dateOriginal.toLocaleDateString('ru-Ru')}`);
console.log(`Измененная копия: ${dateCopy.toLocaleDateString('ru-Ru')}`);

let orderDate = new SpaceDate(2017, 2, 10);
let deliveryDate = orderDate.getNextDate();
console.log(`Дата заказа: ${orderDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата доставки: ${deliveryDate.toLocaleDateString('ru-Ru')}`);

let supplyDate = new SpaceDate(2017, 3, 3);
let requestDate = supplyDate.getPrevDate();
console.log(`Дата поставки: ${supplyDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата заявки поставщику: ${requestDate.toLocaleDateString('ru-Ru')}`);

let someDate = new SpaceDate(2017, 2, 10, 12, 44);
let from = someDate.getDayBeginning();
let to = someDate.getDayEnd();
console.log(`В любое время с ${from.toLocaleString('ru-Ru')} по ${to.toLocaleString('ru-Ru')}`);
Если все реализовано верно, вы получите такой вывод:


Оригинальная дата: 22.02.2017
Измененная копия: 22.02.2022
Дата заказа: 10.03.2017
Дата доставки: 11.03.2017
Дата поставки: 03.04.2017
Дата заявки поставщику: 02.04.2017
В любое время с 10.03.2017, 0:00:00 по 10.03.2017, 23:59:59
Процесс реализации
Создайте класс SpaceDate, унаследовав его от Date.
Прописывать конструктор не нужно, пусть используется конструктор Date. Он нам полностью подходит.
Добавьте метод copy. Учтите, что создаваться должен экземпляр SpaceDate.
Добавьте методы getNextDate и getPrevDate. Оригинальная дата изменяться при их вызове не должна. По возможности подумайте, как избавиться от дублирования кода в них.
Добавьте методы getDayBeginning и getDayEnd. Оригинальная дата изменяться при их вызове не должна.
Проверьте работу вашего кода на примере использования. Также протестируйте его, используя свои примеры.
*/

class SpaceDate extends Date {

    copy(){
        return new SpaceDate(this);
    }

    getNextDate(){
        let nextData = this.copy();
        nextData.setDate(this.getDate() + 1);
        return nextData;
    }
    getPrevDate(){
        let prevData = this.copy();
        prevData.setDate(this.getDate() - 1);
        return prevData;
        
    }
    getDayBeginning(){
        let date = this.copy();
        date.setHours(0, 0, 0, 0);
        return date;
    }
    getDayEnd(){
        let date = this.getDayBeginning();
        date.setMilliseconds(date.getMilliseconds() - 1);
        date.setDate(date.getDate() + 1);
        return date;
    }
}

let dateOriginal = new SpaceDate(2017, 1, 22);
let dateCopy = dateOriginal.copy();
dateCopy.setYear(2022);
console.log(`Оригинальная дата: ${dateOriginal.toLocaleDateString('ru-Ru')}`);
console.log(`Измененная копия: ${dateCopy.toLocaleDateString('ru-Ru')}`);

let orderDate = new SpaceDate(2017, 2, 10);
let deliveryDate = orderDate.getNextDate();
console.log(`Дата заказа: ${orderDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата доставки: ${deliveryDate.toLocaleDateString('ru-Ru')}`);

let supplyDate = new SpaceDate(2017, 3, 1);
let requestDate = supplyDate.getPrevDate();
console.log(`Дата поставки: ${supplyDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата заявки поставщику: ${requestDate.toLocaleDateString('ru-Ru')}`);

let someDate = new SpaceDate(2017, 2, 10, 12, 44);
let from = someDate.getDayBeginning();
let to = someDate.getDayEnd();
console.log(`В любое время с ${from.toLocaleString('ru-Ru')} по ${to.toLocaleString('ru-Ru')}`);
