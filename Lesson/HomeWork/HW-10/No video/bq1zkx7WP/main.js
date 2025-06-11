// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на
// перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const priceKey = 'price';
const timeKey = 'lastUpdate';

const now = Date.now();

let price = localStorage.getItem(priceKey);
let lastUpdate = localStorage.getItem(timeKey);

// Якщо немає значення — ініціалізуємо
if (!price || !lastUpdate) {
    price = 100;
    lastUpdate = now;
    localStorage.setItem(priceKey, price);
    localStorage.setItem(timeKey, now);
} else {
    price = parseInt(price);
    lastUpdate = parseInt(lastUpdate);

    const secondsPassed = (now - lastUpdate) / 1000;

    if (secondsPassed > 10) {
        price += 10;
        localStorage.setItem(priceKey, price);
        localStorage.setItem(timeKey, now);
    }
}

// Відображення в блоці
document.getElementById('priceBlock').innerText = `${price} грн`;