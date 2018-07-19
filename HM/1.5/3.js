'use strict'

function teleport(){

    let arr = [7, 2, 1, 4, 8];
    let arrFunc = [];  

    for(let i = 0; i < arr.length; i++){

        let tmp = function(){
            switch (arr[i]){
                case 0: 
                    console.log(`Телепорт ${i + 1} недоступен, перезаряжается`);
                break;
                case 1:
                    console.log(`Телепорт ${i + 1} использован, заряд — 0 единиц, требуется перезарядка!`);
                    arr[i]--;
                break;
                default:
                    arr[i]--;
                    console.log(`Телепорт ${i + 1} использован, заряд — ${arr[i]} единиц`);
            }
            
        }
        arrFunc.push(tmp);
    }
    return arrFunc;
}

let test = teleport();

test[3]();
test[3]();
test[3]();
test[3]();
test[3]();
test[2]();
test[2]();