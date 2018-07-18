'use strict'
//Task1
function cost(years){
	switch(years) {
		case undefined:
			return 0;
		case 1:
			return 1250;
		case 2:
			return 2300;
		default: return 0;
	}
}

var warrantyCost = cost(2);

console.log(`Дополнительное гарантийное обслуживание: ${warrantyCost} Q`);

//Task2

var text = "Это строка из нескольких слов";
var costForOneWord = 11;

function etching(string){
	if (string === undefined || string === "") {
		return 0;
	}

	var words = string.split(' ');

	return words.length * costForOneWord;
}

var cost = etching(text);

console.log(`Подарочная упаковка и гравировка: ${cost} Q`);