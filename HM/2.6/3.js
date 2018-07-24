'use strict'

function validate(form, fields){

    for(let i = 0; i < fields.length; i++){
        switch (fields[i].name) {
            case 'name':
            
            if(!(fields[i].rule.test(form.name))){

                return false;
            }
            break;
            case 'email':

            const emailEx = /\w+\@[a-z]+\.[a-z]+/
            if(!emailEx.test(form.email)){
                
                return false;
            }
            break;
            case 'phone':
            const phoneEx = /\+7[0-9]{10}/
            if(!phoneEx.test(form.phone)){
                
                return false;
            }
            break;
        }
    }

    return true;

}

const fields = [
    { name: 'name', rule: /^[a-z ]{5,}$/i },
    { name: 'email', rule: 'email' },
    { name: 'phone', rule: 'phone' },
  ];
  
  const forms = [
    { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
    { name: 'III', email: 'ivan@test', phone: '11111' }
  ];


  for (let form of forms) {
    console.log(form);
    if (validate(form, fields)) {
      console.log('Ошибок нет');
    } else {
      console.log('Форма заполнена неверно');
    }
  }