
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами a b
// let square=(aNum, bNum) => aNum + bNum
// console.log(square(5,5))

// створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle=(radius)=>Math.PI*radius*radius
// console.log(circle(10))

// створити функцію яка обчислює та повертає площу циліндра з висотою h та  радіусом r
// let cylinder=(h, r)=>h*Math.PI*r*r
// console.log(cylinder(10,10))

// створити функцію яка приймає масив та виводить кожен елемент
// let foobar=(array) => {
//     for (const item of array) {
//         console.log(item);
//     }
//  }
//  foobar([2,4,5,6,7,8,9,2,1,3,5])

// створити функцію яка створює параграф з текстом та виводить його через document.write Текст задати через аргумент
// let writeText=(strg)=> {
//        document.write(`<p>${strg}</p>`);
// }
// writeText('1sfdshgjkfhkfygjfg');

// створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let items=(text) =>{
//     document.write('<ul>')
//               document.write(`<li>${text}</li>`)
//               document.write(`<li>${text}</li>`)
//               document.write(`<li>${text}</li>`)
//
//     document.write('</ul>')
//     }
// items('hdgkfyluilku')

// створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let items=(text, counter) =>{
//     document.write('<ul>')
//          for (let i = 0; i < counter; i++ ) {
//              document.write(`<li>${text}</li>`)
//          }
//     document.write('</ul>')
//     }
// items('hdgkfyluilku',34)

// створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// foobar=(array)=> {
//      document.write('<ul>')
//         for (const item of array) {
//             document.write(`<li>${item}</li>`) ;
//         }
//     document.write('</ul>')
//  }
//  foobar(['sfsf',4,5,6,'hhfjgh',8,9,true,1,3,5])

// створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.

// foobar=(array) =>{
//              for (const user of array) {
//             document.write(`<div>${user.id} ${user.name} ${user.username}</div>`) ;
//         }
//    }
//    foobar([{id: 1, name: 'Leanne Bret', username: 'Graham'},
//         {id: 2, name: 'Leanne ', username: 'Bret'},
//         {id: 3, name: 'Graham', username: 'Bret'},
//    ])

// створити функцію яка повертає найменьше число з масиву

// minN=(numbers) =>{
//     let min = numbers[0];
//          for (const number of numbers) {
//             if (number < min) {
//                 min = number
//             }
//         }
//     return min;
// }
// console.log(minN([3,4,5,6,7,8,9,2,1,3,-16]))

// створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його/
// Приклад sum([1,2,10]) //->13
// sum=(arr) =>{
//     let SuM = 0;
//     for (let i = 0; i < arr.length; i++) {
//         SuM += arr[i];
//     }
//     return SuM;
// }
//     console.log(sum([1, 2, 10]))

// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// swap=(arr,index1,index2) =>{
//     let temp=arr[index1];
//     arr[index1]=arr[index2];
//     arr[index2]=temp;
//     return arr;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
// exchange=(sumUAH,currencyValues,exchangeCurrency)=> {
//     let oneCurrency;
//     for (const item of currencyValues) {
//         if (item.currency===exchangeCurrency) {
//             oneCurrency = item;
//         }
//     }
//     let sum = sumUAH/oneCurrency.value;
//     return sum;
// }
// console.log(exchange(10000, [{currency:'USD', value:40}, {currency:'EUR', value:42}], 'USD'))