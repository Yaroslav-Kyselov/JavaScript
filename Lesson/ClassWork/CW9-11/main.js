// DOM
// console.log(document.head);
// console.log(document.head.innerHTML);
// console.log(document.head.children);
// console.log(document.body.innerHTML);

// ID
// let ul1 = document.getElementById('list-1');
// console.log(ul1);

// class
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
//
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }

// TAG
// let liList = document.getElementsByTagName('li');
// console.log(liList);

// let list1 = document.getElementById('list-1');
// console.log(list1);
//
// let list1LiCollection = list1.getElementsByTagName('li');
// console.log(list1LiCollection);


// console.log(document.querySelector('body .menu'));
// console.log(document.querySelectorAll('body .menu'));

// let nodeListOf = document.querySelectorAll('#list-2 > li');
// console.log(nodeListOf);
//
// for (const node of nodeListOf) {
//     console.log(node);
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
let infa=JSON.stringify(users);
console.log(infa);
 let rebek = JSON.parse(infa);
 console.log(rebek);