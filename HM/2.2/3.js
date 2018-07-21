'use strict'

const requiredFields = [ 'title', 'price', 'discount' ];
let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
}

function isValidPosition(form, filds){
    
    for(let element of filds){
        if(!(element in form)){
            return false;
        }
    }

    return true;
}

if ( isValidPosition(form1, requiredFields) ) {
    console.log('Форма № 1 заполнена верно');
  } else {
    console.log('В форме № 1 не заполнены необходимые поля');
  }
  
  if ( isValidPosition(form2, requiredFields) ) {
    console.log('Форма № 2 заполнена верно');
  } else {
    console.log('В форме № 2 не заполнены необходимые поля');
  }

