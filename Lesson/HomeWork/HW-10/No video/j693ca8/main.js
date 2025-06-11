// створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача


    function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    const message = document.getElementById('message');

    if (isNaN(age)) {
    message.innerText = 'Будь ласка, введіть коректний вік.';
    message.style.color = 'orange';
} else if (age < 18) {
    message.innerText = 'Вам ще немає 18 років.';
    message.style.color = 'red';
} else {
    message.innerText = 'Доступ дозволено.';
    message.style.color = 'green';
}
}
