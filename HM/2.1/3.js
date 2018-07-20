'use strict'

function loadCurrencyJSON() {
    return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,' +
    '"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,' +
    '"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,' +
    '"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,' +
    '"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount, from, to) {
    
    let loadCurrency = JSON.parse(loadCurrencyJSON());
    let sum = amount / loadCurrency[to] *  loadCurrency[from];
    
    if (isNaN(sum)){
        console.log('Введена неправильная валюта');
        return;
    }

    return Math.ceil(sum * 100) * 0.01;

}

let price1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);
let price2 = convertCurrency(790, 'EUR', 'ZZZ');
console.log(`Сумма ${price2} ZZZ`);