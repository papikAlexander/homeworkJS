'use strict'

const DUTY_PERCENT = 0.73;

function sumDuty() {
	let duty = 0;
	return function(cost){
		return duty += cost * DUTY_PERCENT;
	}
}

let duty = sumDuty();

let sum;

sum = duty(1000);
sum = duty(2000);
sum = duty(5000);

console.log(`Налог с продаж ${DUTY_PERCENT * 100}%, к оплате: ${sum} Q`);


