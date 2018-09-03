'use strict'

/*

Задача № 3. Планировщик машин

Для нашего отдела логиcтики потребовалось реализовать функционал, который бы показывал, какой заказ в какую машину грузить.

Реализовать простой класс TruckPlanner, который бы позволял в простом виде получить распределение заказов по машинам. На данном этапе не требуется решать задачу оптимального распределения заказов с целью сокращения количества машин.
Описание класса

Класс TruckPlanner должен принимать в конструктор следующие аргументы:

    weightLimit — лимит по весу для всех машин, число.

Методы

У экземпляра класса TruckPlanner должен быть доступен один метод:

    add — добавляет заказ в планировщик, принимает в качестве аргумента заказ Order.

Мета-программирование

У экземпляра класса TruckPlanner должен быть реализован итератор, который возвращает машины Truck с распределенными по ним заказами Order.

Для реализации итератора должен обязательно быть использован генератор. Уточним еще раз, что заказы нужно распределить по машинам просто последовательно, с учетом лимита, оптимизировать распределение не требуется.
Класс Order

Принимает в конструктор два аргумента:

    id — идентификатор, число;
    weight — вес заказа, число.

Класс Truck

Принимает в конструктор два аргумента:

    number — порядковый номер машины, число;
    weightLimit — лимит по весу, число.

Имеет следующие свойства и методы:

    свойство totalWeight — общий вес заказов, число, только для чтения.
    метод add — помещает заказ в машину, принимает заказ Order в качестве аргумента. Вернет истину, если заказ влезает в машину, иначе вернет ложь.
    метод isFit — проверит, поместится ли заказ в машину, принимает заказ Order в качестве аргумента. Вернет истину, если заказ влезает в машину, иначе вернет ложь.

Пример использования


const planner = new TruckPlanner(10);
planner.add(new Order(1, 2));
planner.add(new Order(2, 5));
planner.add(new Order(3, 4));
planner.add(new Order(4, 4));
planner.add(new Order(5, 1));
planner.add(new Order(6, 2));

for (const truck of planner) {
  truck.show();
}

Если все реализовано верно, вы получите такой вывод:


Машина №1 (общий вес груза 7кг):
  Заказ #1 2кг
  Заказ #2 5кг
Машина №2 (общий вес груза 9кг):
  Заказ #3 4кг
  Заказ #4 4кг
  Заказ #5 1кг
Машина №3 (общий вес груза 2кг):
  Заказ #6 2кг

Процесс реализации

    Создайте класс TruckPlanner.
    Реализуйте конструктор.
    Реализуйте метод add.
    Добавьте символьное свойство Symbol.iterator, сделав его генератором.
    Перебирайте заказы, помещая их в машину Truck.
    Как только заказы перестанут помещаться в машину, верните в итератор текущую машину и создайте новую.
    И так до тех пор, пока заказы не закончатся.


*/

class Order {
  constructor(id, weight) {
    this.id = id;
    this.weight = weight;
  }
}

class Truck extends Array {
  constructor(number, weightLimit) {
    super();
    this.number = number;
    this.weightLimit = weightLimit;
  }

  add(order) {
    if (!this.isFit(order)) {
      return false;
    }
    this.push(order);
    return true;
  }

  isFit(order) {
    return this.weightLimit >= (this.totalWeight + order.weight);
  }

  get totalWeight() {
    return this.reduce((total, order) => total + order.weight, 0);
  }

  show() {
    console.log(`Машина №${this.number} (общий вес груза ${this.totalWeight}кг):`);
    this.forEach(order => console.log(`\tЗаказ #${order.id} ${order.weight}кг`));
  }
}

class TruckPlanner{
  constructor(weightLimit){
    this.weightLimit = weightLimit;
    this.trucks = [];
    this.truck = new Truck(1, this.weightLimit);
  }

  add (order){

    if (this.trucks.length == 0) {
      this.trucks.push(new Truck(1, this.weightLimit));
    }
    if (this.trucks[this.trucks.length - 1].isFit(order)) {
      this.trucks[this.trucks.length - 1].add(order);
    } else {
      this.trucks.push(new Truck(this.trucks.length + 1, this.weightLimit));
      this.trucks[this.trucks.length - 1].add(order);
    }
  }

  [Symbol.iterator](){
    let trucks = this.trucks;
    return function*() {
      for (let truck of trucks) {
        yield truck;
      }
    }();
  }
}


const planner = new TruckPlanner(10);
planner.add(new Order(1, 2));
planner.add(new Order(2, 5));
planner.add(new Order(3, 4));
planner.add(new Order(4, 4));
planner.add(new Order(5, 1));
planner.add(new Order(6, 2));

for (const truck of planner) {
  truck.show();
}