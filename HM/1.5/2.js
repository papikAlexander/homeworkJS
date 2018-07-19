'use strict'

function isPacked(squarePaper = 30){
    
    return function(width, height, length){
        let square = 2 * ((width * height) + (height * length) + (width * length));
        
        if (square <= squarePaper){
            squarePaper -= square; 
            console.log(`Заказ (${width}/${height}/${length} м) упакован, осталось упаковочной бумаги ${squarePaper} м2`);
            return true;
        } else {
            console.log(`Заказ (${width}/${height}/${length} м) не упакован, осталось упаковочной бумаги ${squarePaper} м2`);
            return false;
        }
    }
}

let order = isPacked();
let status;
status = order(1, 1, 1);
status = order(2, 1, 5);
status = order(1, 1, 1);