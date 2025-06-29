const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

const userBlock = document.getElementById('user-info');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(res => res.json())
  .then(user => {
    userBlock.innerHTML = `<pre>${JSON.stringify(user, null, 2)}</pre>`;
  });

document.getElementById('load-posts').addEventListener('click', () => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('posts-container');
      container.innerHTML = '';
      posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post-block';
        div.innerHTML = `
          <p><strong>Title:</strong> ${post.title}</p>
          <a href="post-details.html?postId=${post.id}">View Post</a>
        `;
        container.appendChild(div);
      });
    });
});
