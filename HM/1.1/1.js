'use strict'

var name, price;
var quantity = 2;
var discount = 1;
var priceFinal;

name = "Телепорт бытовой VZHIH-101";
price = 10000;

console.log(`В наличии имеется: \"${name}\"`);
console.log(`Стоимость товара ${price} Q`);

if(quantity >= 2){
	discount = 0.1;
}

priceFinal = (price * quantity);
priceFinal -= priceFinal * discount; 

console.log(`Цена покупки составит ${priceFinal} Q`);

var money = 52334224;
var priceTeleport = 6500;
var moneyEnd, countTeleport;

moneyEnd = money % priceTeleport;
countTeleport = (money - moneyEnd) / priceTeleport;

console.log(`Мы можем закупить ${countTeleport} единиц товара, после закупки на счету останется ${moneyEnd} Q`)