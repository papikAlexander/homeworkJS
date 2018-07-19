'use strict'

var positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
];
  
var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

//Task1
let hit = {name: hitName, price: hitPrice};
console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

//Task2
let items = [];

function create(nameProduct, priceProduct){
    return {name : nameProduct, price : priceProduct};
}

for(let i = 0; i < positions.length; i++){
    let product = create(positions[i], prices[i]);
    items.push(product);
}

let product = items[4];

console.log(`Купите ${product.name} по цене ${product.price} Q`);

//Task3
function showDiscont(count, product){
    
    let discont;
    if (count < 10){
        discont = 0.05;
    } else if (count >= 10 && count < 50){
        discont = 0.07;
    } else if (count >= 50 && count < 100){
        discont = 0.1;
    } else {
        discont = 0.15;
    }   
    let sum = product.price * count;
    let benefit = sum * discont;

    console.log(`${product.name} — стоимость партии из ${count} штук ${sum} Q (скидка ${discont} %), ваша выгода ${benefit} Q!`);
}

showDiscont(12, items[0]);
showDiscont(97, items[3]);


//Task4
items[3].amount = 4;
console.log(items);

function updateAmount(product, amountCount = 1){
    if(!('amount' in product)){
        return;
    }
    if(product.amount > amountCount || product.amount <= 0){
        
        if (product.amount == amountCount){
            product.amount = 0;
            console.log(`Это был последний ${product.name}, вам повезло!`);
        }

        product.amount -= amountCount; 
        console.log(`${product.name} — остаток ${product.amount} шт`);

    } else {
        console.log(`${product.name} закончился на складе`);
    }
}

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);
