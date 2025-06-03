//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function userFilter (users) {
//     let filteredUsers=[];
//     for (const user of users) {
//         if (!user.status) {
//             filteredUsers.push(user);
//         }
//     }
//     return filteredUsers;
// }
// let filter=userFilter (users);
// console.log(filter);
//
// function iterator (arr,i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr,i);
//     }
// }
// iterator([11,22,33],0);
