// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index + 1})));

//-----------------------------------------------------------------------------------------//

// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
// function cloner(obj) {
//     if (obj) {
//         let functions = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const functionClone = obj[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             cloneObj[func.key] = func.functionClone;
//         }
//
//         console.log(cloneObj);
//         return cloneObj
//
//     }
//
//     throw new Error('!!!!!');
//
// }
//
// const clone = cloner({id: 123, name: 'XXXXX', greeting() {console.log('hello')}, foo() {console.log('bar')}});
// clone.foo();

// function cloner(obj) {
//     if (!obj || typeof obj !== 'object') {
//         throw new Error('Очікую об"єкт!');
//     }
//     const functionMap = {};
//     for (const key in obj) {
//         if (typeof obj[key] === 'function') {
//             functionMap[key] = obj[key].bind({});
//         }
//     }
//     const jsonClone = JSON.parse(JSON.stringify(obj));
//     for (const key in functionMap) {
//         jsonClone[key] = functionMap[key];
//     }
//     console.log(jsonClone);
//     return jsonClone;
// }
//
// const clone = cloner({id: 123, name: 'XXXXX', greeting() {console.log('hello')}, foo() {console.log('bar')}});
// clone.foo();
