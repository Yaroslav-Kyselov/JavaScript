// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s1 = 'hello world';
//         console.log(s1.length);
// let s2 = 'lorem ipsum';
//         console.log(s2.length);
// let s3 = 'javascript is cool';
//         console.log(s3.length);
//
// const strings = [s1, s2, s3];
// for (const i of strings) {
//     console.log(i.length);
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s1='hello world';
// let s2='lorem ipsum';
// let s3='javascript is cool';
// console.log(s1.toUpperCase(s1));
// console.log(s2.toUpperCase(s2));
// console.log(s3.toUpperCase(s3));

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let s1='HELLO WORLD';
// let s2='LOREM IPSUM';
// let s3='JAVASCRIPT IS COOL';
// console.log(s1.toLowerCase(s1));
// console.log(s2.toLowerCase(s2));
// console.log(s3.toLowerCase(s3));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let s=' dirty string   ';
// console.log(s.trim(s).length);
// console.log(s.length);

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
// stringToarray=(str)=> {
//     if (str) {
//         const strArr = str.split(' ');
//         return strArr;
//     }
//     return '';
// }
// console.log(stringToarray('Ревуть воли як ясла повні'));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers=[10,8,-7,55,987,-1011,0,1050,0];
// let string=numbers.map(number=>number+"")
// console.log(string);

// створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки
// залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]
// sortNums=(array,direction)=>{
//     if (direction === 'ascending')
//         return array.sort((a, b) => a - b);
//     if (direction === 'descending')
//         return array.sort((a, b) => b - a);
// }
// console.log(sortNums([11, 21, 3], 'descending'));

// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//     ]
// const map1=coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({...value, id: index + 1}));
// console.log(map1);

// взяти з arrays.js масив coursesArray
// написати пошук всіх об’єктів, в яких в modules є sass
// написати пошук всіх об’єктів, в яких в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('sass');
// }));
//
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('docker');
// }));

// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// const cards = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
// // - знайти піковий туз
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// // - всі шістки
// console.log(cards.filter(card => card.value === '6'));
// // - всі червоні карти
// console.log(cards.filter(card => card.color === 'red'));
//
// // - всі буби
// console.log(cards.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
// console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));