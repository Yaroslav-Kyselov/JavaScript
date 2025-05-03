// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency) {
                let oneCurrency;
                    for (const item of currencyValues) {
                        if (item.currency===exchangeCurrency) {
                            oneCurrency = item;
                        }
                }
                let sum = sumUAH/oneCurrency.value;
                return sum;
}
console.log(exchange(10000, [{currency:'USD', value:25}, {currency:'EUR', value:42}], 'USD'))
