// let name='vasya';
// let age=99;
// let user={
//     name,
//     age,
//     foo(){
//         console.log(this);
//     }
// }
// console.log(user);
// user.foo()

let user={
    name: 'vasya',
    age: 32,
    foo(){
        console.log('this');
    }
}
let{age, name, foo}=user;
console.log(name);
console.log(age);
foo()