
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами a b
// function square(aNum, bNum) {
//     const result=aNum*bNum;
//     console.log(result);
//     return result;
// }
// square(5,5)
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


function items(text, counter) {
    document.write('<ul>')

         for (let i = 0; i < counter; i++ ) {
             document.write(`<ul>${text}</ul>`)
         }
    document.write('</ul>')
    }
items('hdgkfyluilku',34)