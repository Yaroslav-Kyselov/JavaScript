fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    const container = document.getElementById('users-container');
    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user-block';
      div.innerHTML = `
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <a href="user-details.html?userId=${user.id}">View Details</a>
      `;
      container.appendChild(div);
    });
  });
