'use strict'

/*Задача № 3. Рабочие дни
Для планирования доставки, составления графика работы менеджеров отдела продаж и для решения других задач нам нужна возможность листать только рабочие дни в заданном диапазоне. Рабочими днями у нас будут всегда дни с понедельника по пятницу включительно.

Для использования в разных модулях системы создайте класс DateRange. Если экземпляр этого класса листать через for-of, то можно получить только рабочие дни.

Описание конструктора и экземпляра
Конструктор
Принимает два аргумента:

from — дата начала диапазона, объект Date;
to — дата окончания диапазона, объект Date.
Экземпляр
Не имеет свойств и методов. Но при листании через for-of в каждой итерации предоставляет очередной рабочий день — объект Date, начиная с даты начала, если это рабочий день, и заканчивая датой окончания, если она выпадает на рабочий день.

Пример использования

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}
Если все реализовано верно, вы получите такой вывод:


13.03.2017
14.03.2017
15.03.2017
16.03.2017
17.03.2017
20.03.2017
21.03.2017
Процесс реализации
Создайте класс DateRange, описав конструктор, принимающий два аргумента.
Сделайте экземпляры этого класса итерируемыми.
Проверьте работу вашего кода на примере использования. Также протестируйте его, используя свои примеры.
*/

class DateRange{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator](){
        let from = this.from;
        let to = this.to;
        return {
            next() {
                if(from.getDay() == 6){
                    from.setDate(from.getDate() + 2);
                } else if(from.getDay() == 0){
                    from.setDate(from.getDate() + 1);
                }

                if(from.getTime() <= to.getTime()){
                    let time = new Date(from);
                    from.setDate(from.getDate() + 1);
                    return {done: false, value: time};
                } else {
                    return {done: true};
                }
                
            }
        }
    }
}

const from = new Date(2017, 2, 10, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
    console.log(day.toLocaleDateString('ru-Ru'));
}