'use strict'

/*
Задача № 2. Поиск ближайшего пункта телепортации.
Реализуйте конструктор и прототип объекта, выполняющего поиск ближайшего пункта телепортации.

Описание конструктора и экземпляра
Конструктор
Принимает список пунктов телепортации.

points — список пунктов телепортации, массив объектов OrdersTeleportationPoint.
Если будет передан не массив, то конструктор должен бросить исключение.

Если в массиве будут объекты, не являющиеся экземпляром OrdersTeleportationPoint, то их нужно просто проигнорировать.

Экземпляр
Имеет всего один метод:

getClosest
принимает три координаты точки x, y и z и возвращает ближайший к этой точке пункт телепортации.
Пример использования функции

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));
const locator = new OrdersTeleportationPointLocator(points);

const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);
Если все реализовано верно, вы получите такой вывод:


Ближайший пункт телепортации заказов «Темная сторона Луны»
Процесс реализации
Создайте конструктор OrdersTeleportationPointLocator.
Реализуйте метод getClosest.
Проверьте работу, запустив пример использования. А также протестируйте, используя собственные примеры.
*/

function rand(min, max) {
    return Math.ceil((max - min + 1) * Math.random()) + min - 1;
  }
  
  function generateId() {
    return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
  }
  
const pointsInfo = [
    { title: 'Темная сторона Луны', coords: [500, 200, 97] },
    { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
    { title: 'Саратов', coords: [30, 91, 77] }
];

class OrdersTeleportationPoint {
    constructor(title, x, y, z) {
        this.title = title;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getDistance(x, y, z){
        return Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2) + Math.pow((this.z - z), 2));
    }
}

class OrdersTeleportationPointLocator{
    constructor(points){
        if(!Array.isArray(points)) throw 'error!';
        this.points = points.filter(point => point instanceof OrdersTeleportationPoint);
    }

    getClosest(x, y, z){
        let pointLocation = undefined;

        return this.points.reduce((res, point) => {
            
            let distance = point.getDistance(x, y, z);
            
            if (pointLocation > distance || pointLocation == undefined){
                pointLocation = distance;
                res = point;
            }

            return res;
        }, {});
    }
}


const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));
const locator = new OrdersTeleportationPointLocator(points);

const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);
