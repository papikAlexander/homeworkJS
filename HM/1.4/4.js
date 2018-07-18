'use strict'

function order(sum, years, string, needDelivery, namePlanet){

	function costWarranty(years){
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

	function etching(string){
		var costForOneWord = 11;

		if (string === undefined || string === "") {
			return 0;
		}

		var words = string.split(' ');

		return words.length * costForOneWord;
	}

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

	var warrantyCost = costWarranty(years);
	var etchingCost = etching(string);
	var deliveryCost = delivery(needDelivery, namePlanet);

	if(warrantyCost == 0 || etchingCost == 0 || deliveryCost == 0 || isNaN(deliveryCost)){
		console.log('Ошибка при расчете стоимости');
		return;
	}

	var total = sum + warrantyCost + etchingCost + deliveryCost;

	console.log(`Общая стоимость заказа: ${total} Q.`)
	console.log(`Из них ${warrantyCost} Q за гарантийное обслуживание на ${years} год/года.`);
	console.log(`Гравировка на сумму ${etchingCost} Q.`);
	console.log(`Доставка в область ${namePlanet}: ${deliveryCost} Q.`); 

}

order(1252, 1, "Галактика Туманность Андромеды", true, 'Луна');