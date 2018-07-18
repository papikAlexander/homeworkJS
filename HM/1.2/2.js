'use srtict'

var region = 'Крабовидна туманность';
var place;

switch(region) {
	case place = 'Луна':
		console.log(`Стоимость доставки для области ${place}: 150 Q`);
		break;
	case place = 'Крабовидная туманность':
		console.log(`Стоимость доставки для области ${place}: 250 Q`);
		break;
	case place = 'Галактика Туманность Андромеды':
		console.log(`Стоимость доставки для области ${place}: 550 Q`);
		break;
	case place = 'Туманность Ориона':
		console.log(`Стоимость доставки для области ${place}: 600 Q`);
		break;
	case place = 'Звезда смерти':
		console.log(`Стоимость доставки для области ${place}: договорная цена`);
		break;
	default :
		console.log('В ваш квадрант доставка не осуществляется');

}