'use strict'

function stripTags(text){
    return text.replace(/\<\/?\w+\>/g, '');
}

const texts = [
    '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
    '<EM>Световой меч</EM> в <strong>каждый</strong> дом!'
  ];
  
  for (let text of texts) {
    console.log(stripTags(text));
  }