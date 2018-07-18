'use strict'

var needDelivery = false;

function delivery(needDelivery, namePlanet){
	if (!needDelivery) {
		return 0;
	}

	switch(namePlanet) {
		case 'Луна':
			return 150;
			break;
		case 'Крабовидная туманность':
			return 250;
			break;
		case 'Галактика Туманность Андромеды':
			return 550;
			break;
		case 'Туманность Ориона':
			return 600;
			break;
		case 'Звезда смерти':
			return 'договорная цена';
			break;
		default: 
			return NaN;
	}
}

var result = delivery(true, "Звезда смерти");

if (isNaN(result)) {
	console.log('Ошибка при расчете стоимости доставки');
} else if(result == 0){
	console.log('Доставка не требуется');
} else {
	console.log(`Стоимость доставки: ${result} Q`);
}