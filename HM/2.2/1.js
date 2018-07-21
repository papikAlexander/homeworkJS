'use strict'

var positions = [
    {
      title: 'Телепорт бытовой VZHIH-101',
      price: 10000,
      discount: 7,
      available: 3
    },
    {
      title: 'Ховерборд Mattel 2016',
      price: 9200,
      discount: 4,
      available: 14
    },
    {
      title: 'Меч световой FORCE (синий луч)',
      price: 57000,
      discount: 0,
      available: 1
    }
];

const itemPrototype = {
    hold(amount = 1) {
      if (this.available < amount) {
        return false;
      }
      this.available -= amount;
      this.holded += amount;
      return true;
    },
    toString() {
      return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
    },
    unhold(amount = null){
        if(amount == null){
            this.available += this.holded;
            this.holded = 0;
            return true;
        } else if(this.holded < amount){
            return false;
        } else {
            this.available += amount;
            this.holded -= amount;
        }
    }
};
  
function createItem(title, amount) {
    const item = Object.create(itemPrototype);
    item.title = title;
    item.available = amount;
    item.holded = 0;
    return item;
}
  
const items = [];

for (let item of positions) {
    items.push(createItem(item.title, item.available));
}
  
items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);

for (let item of items) {
    console.log(`Товар ${item}`);
}

console.log(`Товар ${items[0]}`); 
// Товар Телепорт бытовой VZHIH-101 (остаток 1, в резерве 2)
items[0].unhold(1);
console.log(`Товар ${items[0]}`); 
// Товар Телепорт бытовой VZHIH-101 (остаток 2, в резерве 1)

console.log(`Товар ${items[1]}`); 
// Товар Ховерборд Mattel 2016 (остаток 6, в резерве 8)
items[1].unhold();
console.log(`Товар ${items[1]}`); 
// Товар Ховерборд Mattel 2016 (остаток 14, в резерве 0)

for (let item of items) {
    console.log(`Товар ${item}`);
}