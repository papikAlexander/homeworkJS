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
      available: 1,
      get finalPrice(){

      }
        
    }
];

positions.forEach(item => {
    console.log(item);
    
    Object.defineProperty(item, 'finalPrice', {
        get : function(){
            return this.price - (this.price * this.discount * 0.01);
        },
        set : function(value){
            
            if(value > this.price){
                throw console.error('Конечная цена больше за базовую');
            }

            this.discount = (this.price - value) / this.price / 0.01;
        }
    })
})

console.log(positions[0].finalPrice); // 9300
positions[2].finalPrice = 285000;
console.log(positions[2].discount); // 50