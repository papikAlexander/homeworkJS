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

  function createButton(title, onclick) {
    return {
      title,
      onclick,
      click() {
          console.log(this);
        //this.onclick.call(this);
      }
    };
  }

function createBuyButtons(items){
    let tmp = ["cwaa"];
    
    items.forEach(item => {
        tmp.push(createButton.bind(item, 'Buy', show));
    })
    return tmp;
}

function show(){
    console.log(`${this.title} добавлен в корзину`)
}

const buttons = createBuyButtons(items);
console.log(buttons);
buttons[0].show();

