// За допомогою циклу вивести всю інформацію про користувачів, використовуючи шаблон
//
//
//
// <div class=”users-box”>
//
// <div class=”user-block”>
//
// <h2>ID – NAME – USERNAME </h2>
//
// <h3>EMAIL – PHONE</h3>
//
// <div class=”address-block”>
//
// <p>City – ADDRESS.CITY</p>
//
// <p>Street – ADDRESS.STREET</p>
//
// <p>Suite – ADDRESS.SUITE</p>
//
// <p>Zip code – ADDRESS.ZIPCODE</p>
//
// </div>
//
// </div>
//
//
//
// <!–
//
// …
//
// …
//
// …
//
//             other users
//
//             –>
// за допомогою стилів, побудувати сітку по 2 об’єктах в рядок
//
// let user =
//     {id:1, name: 'vasya', age: 31, status: true, skills:[]}
//
// for (let fieldName in user) {
//     console.log(fieldName, user[fieldName]);
// }
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {

    for (const fieldName in user) {
        console.log(fieldName, user[fieldName]);
    }
    console.log('');
}