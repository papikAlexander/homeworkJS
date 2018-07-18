'use strict'

var price = "";

try {
	if (typeof(price) == "number") {
		console.log('Цена товара введена корректно');
	} else {
		throw "error";
	}
	
} catch(e){
	console.log(`Вы допустили ошибку: ${price} не является числом`);
}