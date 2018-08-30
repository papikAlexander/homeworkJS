'use strict'

/*
Задача № 1. Генератор штрих-кодов
Для печати наклеек со штрих-кодами на коробки необходимо реализовать класс BarcodeGenerator. Экземпляр этого класса должен создавать и возвращать случайные коды вида AA-1419. В этом коде AA — префикс, все коды получают один и тот же префикс. Префикс может отсутствовать. 1419 — случайный числовой код. Количество символов в этом коде задаётся в конструкторе генератора. По умолчанию это 1.

Также реализовать возможность смены префикса через символьное свойство. По умолчанию префикс отсутствует. В этом случае символа - в штрих-коде быть не должно.

Описание конструктора и экземпляра
Конструктор
Принимает один аргумент:

size — количество символов числовой части кода, число, по умолчанию равен 1.
Экземпляр
Имеет всего один метод:

create
не принимает аргументов, возвращает строку из префикса и кода, разделенных символом -. Если префикса нет, то символ - в код не добавляется. Числовая часть должна быть случайной и иметь такое количество символов, которое было передано в конструктор генератора при создании.
Пример использования

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());
Если все реализовано верно, вы получите такой вывод:


AA-1419
XX-4031
XX-1600
XX-3184
9318
Процесс реализации
Создайте класс BarcodeGenerator, определив конструктор.
Реализуйте в методе create генерацию случайного штрих-кода с заданным количеством символов. Пока без префикса.
Создайте символ для символьного свойства, в котором будет храниться префикс.
Используйте символьное свойство с префиксом для генерации штрих-кода.
Проверьте работу вашего кода на примере использования. Также протестируйте его, используя свои примеры.
*/

class BarcodeGenerator{
    constructor(size = 1){
        this.size = size;
        this.prefix = undefined;
    }

    create(){
        let prefix = this[BarcodeGenerator.prefix];
        let code = Math.ceil(Math.random() * (Math.pow(10, this.size)));
        return (!prefix) ? "" + code : prefix + '-' + code;
    }
}

BarcodeGenerator.prefix = Symbol();

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());

