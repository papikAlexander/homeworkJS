'use strict'

const items = [
    {
      title: 'Телепорт бытовой VZHIH-101',
      available: 7,
      holded: 0
    },
    {
      title: 'Ховерборд Mattel 2016',
      available: 4,
      holded: 5
    },
    {
      title: 'Меч световой FORCE (синий луч)',
      available: 1,
      holded: 1
    }
];

function formatFull() {
    return `${this.title}:\n\tдоступно ${this.available} шт.\n\tв резерве ${this.holded} шт.`;
}
  
function formatLite() {
    return `${this.title} (${this.available} + ${this.holded})`;
}
/*
* Было console.log(format()); 
* Я сделал так, но думаю что неверно!!!! 
* Не уверен что нужно было его изменять, а нужно написать функцию showItems и здесь ничего не изменять 
*/  
function show(format) {
    console.log(format.call(this));
}

function showItems(list, formatter){
    list.forEach(item => {
        show.call(item, formatter);
    });
}

showItems(items, formatFull);
console.log('---');
showItems(items, formatLite);

