'use strict'

var quantityStore = 10;
var quantityOrder = 9;

if (quantityStore < quantityOrder) {
	console.log('На складе нет такого количества товаров.');
} else if (quantityStore == quantityOrder) {
	console.log('Вы забираете весь товар c нашего склада!');
} else {
	console.log('Заказ оформлен');
}