// XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.phone = phone;
// }
// const user=new User(1, 'qwe', 'rty', '+32465637');
// console.log(user);
//
// let users=[new User(1, 'qwe', 'rty', '+32465637'),
//                 new User(2, 'asd', 'fgh', '+9696959403'),
//                 new User(3, 'zxc', 'vbn', '+567453436'),
//                 new User(4, 'wer', 'tyu', '+3446899'),
//                 new User(5, 'sdf', 'ghj', '+6789943'),
//                 new User(6, 'ghj', 'kl;', '+7998754'),
//                 new User(7, 'ytde', 'fghjk', '+235609'),
//                 new User(8, 'sdgdh', 'kgjlk', '+98765432'),
//                 new User(9, 'kyhjgdf', 'sgdsh', '+56700721'),
//                 new User(10,'rrthj', 'jhk', '+5668321')
// ]
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання (XjJuucOMR0), та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function User(id, name, surname, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.phone = phone;
// }
// let users=[new User(1, 'qwe', 'rty', '+32465637'),
//                 new User(2, 'asd', 'fgh', '+9696959403'),
//                 new User(3, 'zxc', 'vbn', '+567453436'),
//                 new User(4, 'wer', 'tyu', '+3446899'),
//                 new User(5, 'sdf', 'ghj', '+6789943'),
//                 new User(6, 'ghj', 'kl;', '+7998754'),
//                 new User(7, 'ytde', 'fghjk', '+235609'),
//                 new User(8, 'sdgdh', 'kgjlk', '+98765432'),
//                 new User(9, 'kyhjgdf', 'sgdsh', '+56700721'),
//                 new User(10,'rrthj', 'jhk', '+5668321')
// ];
//
// const filterUsers = users.filter((user) => user.id % 2 === 0);
// console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання XjJuucOMR0, та відсортувати його по id. по зростанню (sort)

// function User(id, name, surname, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }
// let users=[new User(1, 'qwe', 'rty', '+32465637'),
//     new User(12, 'asd', 'fgh', '+9696959403'),
//     new User(32, 'zxc', 'vbn', '+567453436'),
//     new User(44, 'wer', 'tyu', '+3446899'),
//     new User(435, 'sdf', 'ghj', '+6789943'),
//     new User(655, 'ghj', 'kl;', '+7998754'),
//     new User(67, 'ytde', 'fghjk', '+235609'),
//     new User(88, 'sdgdh', 'kgjlk', '+98765432'),
//     new User(99, 'kyhjgdf', 'sgdsh', '+56700721'),
//     new User(110,'rrthj', 'jhk', '+5668321')
// ];
// console.log(users.sort((user1, user2) => user1.id - user2.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
// }
// const client = new Client(1,"Leanne Graham","Bret", "Sincere@april.biz","1-770-736-8031 x56442", ['tv', 'PS','dfg']);
//
// let clients =[
//     new Client(1,"Leanne Graham","Bret", "Sincere@april.biz","1-770-736-8031 x56442", ['tv', 'PS','dfg']),
//     new Client(2,"Ervin Howell","Antonette", "Shanna@melissa.tv","010-692-6593 x09125",['PS', 'milk', 'wdaad']),
//     new Client(3,"Clementine Bauch","Samantha","Nathan@yesenia.net","1-463-123-4447",['dhfdg', 'sdfgfj', 'sgdg']),
//     new Client(4,"Patricia Lebsack","Karianne","Julianne.OConner@kory.org","493-170-9623 x156",['dhfgjgjh', 'sdfgfdj', 'sgdg']),
//     new Client(5,"Chelsey Dietrich","Kamren","Lucio_Hettinger@annie.ca","(254)954-1289",['dhfdgjgjh', 'sdhfdj']),
//     new Client(6,"Mrs. Dennis Schulist","Leopoldo_Corkery","Karley_Dach@jasper.info","1-477-935-8478 x6430",['dhf', 'sdj', 'sgdg']),
//     new Client(7,"Kurtis Weissnat","Elwyn.Skiles","Telly.Hoeger@billy.biz","210.067.6132",['dhf', 'sdfg', 'sgdg']),
//     new Client(8,"Nicholas Runolfsdottir V","Maxime_Nienow","Sherwood@rosamond.me","586.493.6943 x140",['dhfdg', 'sdfgj', 'sgdg']),
//     new Client(9,"Glenna Reichert","Delphine","Chaim_McDermott@dana.io","(775)976-6794 x41206",['gjgjh', 'sdfj', 'sgdg']),
//     new Client(10,"Clementina DuBuque","Moriah.Stanton","Rey.Padberg@karina.biz","024-648-3804",['dhdgjh', 'sdfj', 'sgdg', 'iuiuito'])
// ];
// console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// function Client(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
// }
// const client = new Client(1,"Leanne Graham","Bret", "Sincere@april.biz","1-770-736-8031 x56442", ['tv', 'PS','dfg']);
//
// let clients =[
//     new Client(1,"Leanne Graham","Bret", "Sincere@april.biz","1-770-736-8031 x56442", ['tv', 'PS','dfg']),
//     new Client(2,"Ervin Howell","Antonette", "Shanna@melissa.tv","010-692-6593 x09125",['PS', 'milk', 'wdaad']),
//     new Client(3,"Clementine Bauch","Samantha","Nathan@yesenia.net","1-463-123-4447",['dhfdg', 'sdfgfj', 'sgdg']),
//     new Client(4,"Patricia Lebsack","Karianne","Julianne.OConner@kory.org","493-170-9623 x156",['dhfgjgjh', 'sdfgfdj', 'sgdg']),
//     new Client(5,"Chelsey Dietrich","Kamren","Lucio_Hettinger@annie.ca","(254)954-1289",['dhdgjh', 'sdfj', 'sgdg', 'iuiuito', 'fjfkdlls']),
//     new Client(6,"Mrs. Dennis Schulist","Leopoldo_Corkery","Karley_Dach@jasper.info","1-477-935-8478 x6430",['dhf', 'sdj', 'sgdg']),
//     new Client(7,"Kurtis Weissnat","Elwyn.Skiles","Telly.Hoeger@billy.biz","210.067.6132",['dhf', 'sdfg', 'sgdg']),
//     new Client(8,"Nicholas Runolfsdottir V","Maxime_Nienow","Sherwood@rosamond.me","586.493.6943 x140",['dhfdg', 'sdfgj', 'sgdg']),
//     new Client(9,"Glenna Reichert","Delphine","Chaim_McDermott@dana.io","(775)976-6794 x41206",['gjgjh', 'sdfj', 'sgdg']),
//     new Client(10,"Clementina DuBuque","Moriah.Stanton","Rey.Padberg@karina.biz","024-648-3804",['dhdgjh'])
// ];
// const sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer=producer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engineVolume=engineVolume;

//     this.drive=function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     };
//     this.info=function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     this.increaseMaxSpeed=function (speedToAdd) {
//         if (speedToAdd >0) this.maxSpeed = this.maxSpeed+speedToAdd;
//     }
//     this.changeYear = function (year) {
//         if (year > 1945) this.year = year;
//     };
//
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
// const car=new Car('Ford','Edge',2018,180,2.4);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.mode = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info() {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     increaseMaxSpeed(speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//     changeYear = function (year) {
//         if (year > 1945) this.year = year;
//     };
//     addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
//
// }
// const car=new Car('Ford','Edge',2018,180,2.4);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2020);
// car.addDriver({});
// console.log(car);