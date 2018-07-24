'use strict'

let text = '';

function handleKey(char){
    text += char; 
    if(text.slice(text.length - 4).toLowerCase() == 'r2d2'){
        showSpecialPrice();
    }
}

function showSpecialPrice(){
    console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

let keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

