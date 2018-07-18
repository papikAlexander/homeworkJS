'use strict'

var planet = "Юпитерs", age = 180;

if (planet == "Земля") {
	if (age < 18) {
		console.log("Вы не достигли совершеннолетия");
	} else {
		console.log("Приятных покупок");
	}
} else if (planet == "Юпитер"){
	if (age < 120) {
		console.log("Сожалеем. Вернитесь на 120-й день рождения!.");
	} else {
		console.log("Чистого неба и удачных покупок!");
	}
} else {
	console.log('Спасибо, что пользуетесь услугами нашего магазина!');
}