
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами a b
// function square(aNum, bNum) {
//     const result=aNum*bNum;
//     console.log(result);
//     return result;
// }
// // square(5,5)
// square(22,33)

// створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(radius) {
//     const result=Math.PI*radius*radius
//     console.log(result);
//     return result;
// }
// circle(24)

// // створити функцію яка приймає масив та виводить кожен елемент
// function foobar(array) {
//     for (const item of array) {
//         console.log(item);
//     }
//  }
//  foobar([3,4,5,6,7,8,9,2,1,3,5])

// // створити функцію яка створює параграф з текстом та виводить його через document.write Текст задати через аргумент
//
// function writeText(strg) {
//        document.write(`<p>${strg}</p>`);
// }
// writeText('sfdshgjkfhkfygjfg');

// створити функцію яка створює  ul  з елементами li. текст задати через аргумент всім однаковий. кількість li
// задати другим аргуметом який є числовим (тут використовується цикл) та виводить його через document.write
//
// function items(text, counter) {
//     document.write('<ul>')
//
//          for (let i = 0; i < counter; i++ ) {
//              document.write(`<ul>${text}</ul>`)
//          }
//     document.write('</ul>')
//     }
// items('hdgkfyluilku',34)

// створити функцію яка приймає масив примітивних елементів (числа, стрінги. булі) та будує для них список  (ul li)
// та виводь його через document.write

// function foobar(array) {
//      document.write('<ul>')
//         for (const item of array) {
//             document.write(`<li>${item}</li>`) ;
//         }
//     document.write('</ul>')
//  }
//  foobar(['sfsf',4,5,6,'hhfjgh',8,9,true,1,3,5])

// створити функцію яка приймає масив обєктів з наступними полями (id, name, age) та виводить його в документ
// для кожного обєкту окремий блок

// function foobar(array) {
//              for (const user of array) {
//             document.write(`<div>${user.id} ${user.name} ${user.username}</div>`) ;
//         }
//    }
//    foobar([{id: 1, name: 'Leanne Graham', username: 'Bret'},
//         {id: 2, name: 'Leanne ', username: 'Bret'},
//         {id: 3, name: 'Graham', username: 'Bret'},
//    ])

// створити функцію яка повертає найменьше число з масиву

// function minN(numbers) {
//     let min = numbers[0];
//          for (const number of numbers) {
//             if (number < min) {
//                 min = number
//             }
//         }
//     return min;
// }
// console.log(minN([3,4,5,6,7,8,9,2,1,3,-16]))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його
// function sum(arr) {
//     let SuM = 0;
//     for (let i = 0; i < arr.length; i++) {
//         SuM += arr[i];
//     }
//     return SuM;
// }
// // sum([1, 2, 3, 4, 5]);
//     console.log(sum([1, 2, 3, 4, 5]))
