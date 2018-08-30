'use strict'

/*
Задача № 2. Электронная очередь
На некоторых планетах, где у нас есть пункт самовывоза, принята шестнадцатеричная система счисления. И поэтому порядковые номера в электронной очереди нужно выдавать в этой системе счисления.

Создайте класс HexRange, который реализует листаемый диапазон шестнадцатеричных чисел.

Описание конструктора и экземпляра
Конструктор
Принимает два аргумента:

from — начало диапазона, число в десятеричной системе счисления;
to, — конец диапазона, число в десятеричной системе счисления.
Экземпляр
Не имеет методов. Но его можно листать с помощью for-of или разбирать операторами деструктуризации. Каждый элемент — это строка, шестнадцатеричное представление очередного элемента диапазона.

Пример использования

let queue = new HexRange(247, 253);
console.log(...queue);
Если все реализовано верно, вы получите такой вывод:


f7 f8 f9 fa fb fc fd
Процесс реализации
Создайте класс HexRange, описав конструктор.
Сделайте экземпляры этого класса итерируемыми.
Проверьте работу вашего кода на примере использования. Также протестируйте его, используя свои примеры.
*/

function decToHex(n){ return Number(n).toString(16); }


class HexRange{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator](){
        let from = this.from;
        let to = this.to;
        return {
            next() {
                if (from <= to){
                    return {done: false, value: decToHex(from++)};
                } else {
                    return {done: true};
                }
                
            }
        }
    }

}

let queue = new HexRange(247, 253);
console.log(...queue);