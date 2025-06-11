// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//При натисканні next виводяться наступні 10 об’єктів
//При натисканні prev виводяться попередні 10 об’єктів

// 1. Створення масиву з 100 об'єктів
const data = [];
for (let i = 1; i <= 100; i++) {
    data.push({ id: i, name: `Об'єкт №${i}` });
}

let currentPage = 1;
const itemsPerPage = 10;

function displayPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleItems = data.slice(start, end);

    const listDiv = document.getElementById('list');
    listDiv.innerHTML = '';

    visibleItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerText = `ID: ${item.id}, Name: ${item.name}`;
        listDiv.appendChild(div);
    });
}

function nextPage() {
    if (currentPage < data.length / itemsPerPage) {
        currentPage++;
        displayPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
    }
}

// При завантаженні сторінки
displayPage(currentPage);