'use strict'

function parseData(listNameCell, data){
    
    let arr = [];
    data.forEach(element => {
        let items = element.split(',');
        let obj = {};
        
        if(listNameCell.length != items.length){
            return [];
        }

        for(let i = 0; i < items.length; i++){
            obj[listNameCell[i]] = items[i].trim();
        }

        arr.push(obj);
    });

    return arr;
}

const data = [
    '12,Телепорт бытовой VZHIH-101 ,17,10000',
    '77, Меч световой FORCE (синий луч), 2,57000'
  ];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);