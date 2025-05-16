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

function Client(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
}