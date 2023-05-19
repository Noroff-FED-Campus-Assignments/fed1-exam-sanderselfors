const endpoint = 'https://remarkable-rainstorm.flywheelsites.com/wp-json/wp/v2/posts/';
const postList = document.getElementById('post-list');

function renderPost(post) {
  const li = document.createElement('li');
  li.classList.add('post-card');

  fetch(`https://remarkable-rainstorm.flywheelsites.com/wp-json/wp/v2/media/${post.featured_media}`)
    .then(response => response.json())
    .then(media => {
      const image = document.createElement('img');
      image.classList.add('post-image');
      image.src = media.source_url;
      image.alt = post.title.rendered;
      li.appendChild(image);

      const title = document.createElement('h2');
      title.classList.add('post-title');
      title.innerText = post.title.rendered;
      li.appendChild(title);

      const content = document.createElement('p');
      content.classList.add('post-excerpt');
      content.innerHTML = post.excerpt.rendered;
      li.appendChild(content);

      const readMoreBtn = document.createElement('a');
      readMoreBtn.classList.add('read-more-btn');
      readMoreBtn.innerText = 'Read More';
      readMoreBtn.href = `blogdetails.html?id=${post.id}`;
      li.appendChild(readMoreBtn);
    })
    .catch(error => console.error(error));

  postList.appendChild(li);
}

function fetchPosts() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      data.forEach(post => renderPost(post));
    })
    .catch(error => console.error(error));
}

fetchPosts();