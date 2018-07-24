'use strict'

function fixAmount(amount) {
    switch (typeof(amount)) {
        case 'number':
            return amount;
        case 'string':
    let result = amount.match(/\d+[/.|/,]?\d*/);

        return (result != null) ? result[0].replace(',', '.') : -1;

        default:
            return -1;
    }

}

const orders = [
    { price: 21, amount: 4 },
    { price: 50, amount: '17 штук' },
    { price: 7, amount: '1,5 килограмма' },
    { price: 2, amount: ' 2.7 метра ' },
    { price: 1, amount: 'семь единиц' }
];
  
for (let order of orders) {
    let result = fixAmount(order.amount);
    console.log(`Заказ на сумму: ${result * order.price} Q`);
}

  