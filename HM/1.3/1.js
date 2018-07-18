'use strict'

var positions = [
        'Отвертка ультразвуковая WHO-D',
        'Ховерборд Mattel 2016',
        'Нейтрализатор FLASH black edition',
        'Меч световой FORCE (синий луч)',
        'Машина времени DeLorean',
        'Репликатор домашний STAR-94',
        'Лингвенсор 000-17',
        'Целеуказатель электронный WAY-Y'
      ]

//Task 1
var length = positions.length;
var i = 0;

console.log('Список наименований');

for (var product of positions){
	i++;
	console.log(i + " \'" + product + "\'");
}

//Task 2
var newPositions = positions;

newPositions.push('Экзоскелет Trooper-111');
newPositions.push('Нейроинтерфейс игровой SEGUN');
newPositions.push('Семена дерева Эйва');

console.log('Окончательный список наименований');

i = 0;
for (var product of newPositions){
	i++;
	console.log(i + " \'" + product + "\'");
}

//Task 3
var element = newPositions.indexOf('Машина времени DeLorean');
var prod = newPositions.splice(element, 1);
newPositions.unshift(prod[0]);
var firstProducts = newPositions.slice(0, 3);

console.log('Принять в первую очередь');
i = 0;
for (var product of firstProducts){
	i++;
	console.log(i + " \'" + product + "\'");
}

//Task 4
var product1 = newPositions[0];
var product2 = newPositions[1];
var product3 = newPositions[2];
var product4 = newPositions[3];
var product5 = newPositions[4];

var otherPositions = newPositions.splice(5);

console.log("В магазине");
console.log(`1 '${product1}'`);
console.log(`2 '${product2}'`);
console.log(`3 '${product3}'`);
console.log(`4 '${product4}'`);
console.log(`5 '${product5}'`);

console.log("Остальные товары");
i = 0;
for (var product of otherPositions){
	i++;
	console.log(i + " \'" + product + "\'");
}


