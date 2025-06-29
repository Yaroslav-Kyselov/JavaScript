const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(post => {
    document.getElementById('post-info').innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`;
  });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then(res => res.json())
  .then(comments => {
    const container = document.getElementById('comments-container');
    comments.forEach(comment => {
      const div = document.createElement('div');
      div.className = 'comment-block';
      div.innerHTML = `
        <p><strong>${comment.name}</strong></p>
        <p>${comment.body}</p>
      `;
      container.appendChild(div);
    });
  });
