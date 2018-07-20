'use strict'

var positions = [
    {
      title: 'Телепорт бытовой VZHIH-101',
      producer: {
        name: 'Рязанский телепортостроительный завод',
        deferPeriod: 10,
        lot: 3
      },
      price: 10000
    },
    {
      title: 'Ховерборд Mattel 2016',
      producer: {
        name: 'Волжский Ховерборд Завод',
        deferPeriod: 24,
        lot: 14
      },
      price: 9200
    },
    {
      title: 'Меч световой FORCE (синий луч)',
      producer: {
        name: 'Тульский оружейный комбинат',
        deferPeriod: 5,
        lot: 1
      },
      price: 57000
    }
];

//Task1
function lotCalculator(position, countProduct){
    let obj = {};
    
    if(countProduct % position.producer.lot == 0){
        obj.lots = countProduct / position.producer.lot;
    } else {
        obj.lots = parseInt(countProduct / position.producer.lot) + 1;
    }

    obj.total = position.price * obj.lots * position.producer.lot;

    return obj;
}

let result1 = lotCalculator(positions[1], 110);
console.log(result1);
let result2 = lotCalculator(positions[2], 1);
console.log(result2);

function showResult(position, countProduct){
    let obj = lotCalculator(position, countProduct);

    console.log(`${position.title} ${countProduct} штук: заказать партий ${obj.lots}, стоимость ${obj.total} Q`);
}

showResult(positions[1], 110);
showResult(positions[2], 1);

//Task2

const deferedPayments = [];

function deferPay(producer, amount, date){
  let obj = {
    producer : producer,
    amount : amount,
    paymentDate : date
  }

  obj.paymentDate.setDate(obj.paymentDate.getDate() + producer.deferPeriod);

  deferedPayments.push(obj);

}

deferPay(positions[0].producer, 7200, new Date(2030, 4 - 1, 10));
deferPay(positions[1].producer, 9200, new Date(2035, 10, 2));

console.log(deferedPayments.length); // 1
console.log(deferedPayments[0].producer.name); // Рязанский телепортостроительный завод
console.log(deferedPayments[0].amount); // 7200
console.log(deferedPayments[0].paymentDate);

deferedPayments.forEach(element => {
  console.log(`${element.paymentDate.toLocaleDateString('ru-Ru')}:` 
  + ` ${element.producer.name}, сумма ${element.amount} Q`);
});

