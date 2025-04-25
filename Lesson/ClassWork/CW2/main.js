
// -----------------------------------------lesson 2.5
// let users=[
//     {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
//     {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
//     {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
//     {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
// ];
// console.log(users)
// // console.log(users[1].name)
// console.log(users[0]['id'])
// let user0=users[0]
// console.log(user0.id)
// console.log(user0.skills)
// console.log(user0.skills[2])
// ------------------------------------------lesson2.6
// let user={id:1,
//                             name:'vasya'}
// user.age=31;
// user['status']=false;
// delete user.id;
// console.log(user);

//--------------------------------------------lesson2.7
// let a=100;
// let b=a;
// b=b+10;
// console.log(a);
// console.log(b);
//
// let user = {name: 'vasya'};
// let user2 = user;
// console.log(user2);
// user2.age = 31;
// console.log(user2);
//
// console.log(user);

//--------------------------------------------lesson2.8
// let color='green';
// if (color === "red") {
//     console.log('stop')}
// else {
//     console.log('go');
//     }

    // let age = +prompt('Enter your age');
    // // console.log(age, typeof age);
    // if (age < 18) {
    //     console.log('cartoon');
    // } else {console.log('adult')}

// let color = prompt('enter color');
// // let isRoadClear = prompt('is road clear?');
//
// if (color === 'green') {
//     console.log('you can go');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('?????');
// }

//----------------------------------------------------lesson 2.9
let color = prompt('enter color');


switch (color) {
    case 'green':
        console.log('go!');
        break;
    case 'yellow':
        console.log('wait');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('????');
}