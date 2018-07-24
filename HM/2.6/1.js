'use strict'

function checkCoupon(code){
    let res = code.replace(/\W|\_/g, '').toLowerCase();
    if(res.length >= 10){
        let tmp = '';
        
        for(let i = res.length - 1; i >= 0; i--){
            tmp += res.charAt(i);
        }
        
        return (tmp === res) ? true : false;

    } else {
        return false;
    }
}


let codes = [
    'Madam, I’m Adam',
    'A man, a plan, a canal. Panama',
    '----<-------Eve------->-----',
    '[__777-x-44-x-777__]',
    '1234564321',
    'Olson in Oslo'
  ];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}