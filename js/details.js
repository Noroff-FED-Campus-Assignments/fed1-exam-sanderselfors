const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const postTitleEl = document.getElementById('post-title');
const postContentEl = document.getElementById('post-content');

fetch(`https://remarkable-rainstorm.flywheelsites.com/wp-json/wp/v2/posts/${postId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch post data');
    }
    return response.json();
  })
  .then(data => {
    postTitleEl.innerText = data.title.rendered;
    postContentEl.innerHTML = data.content.rendered;

    const images = postContentEl.getElementsByTagName('img');

    Array.from(images).forEach(image => {
      const enlargedImgDiv = document.createElement('div');
      enlargedImgDiv.classList.add('enlarged-img');
      enlargedImgDiv.style.display = 'none';

      const enlargedImg = new Image();
      enlargedImg.src = image.src;
      enlargedImg.classList.add('enlarged-img__image');
      enlargedImgDiv.appendChild(enlargedImg);

      image.addEventListener('click', () => {
        postContentEl.style.display = 'none';
        enlargedImgDiv.style.display = 'flex';
        document.body.appendChild(enlargedImgDiv);
      });

      enlargedImgDiv.addEventListener('click', () => {
        enlargedImgDiv.style.display = 'none';
        postContentEl.style.display = 'block';
        document.body.removeChild(enlargedImgDiv);
      });
    });
  })
  .catch(error => {
    console.error(error);
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Failed to fetch post data. Please try again later.';
    postContentEl.appendChild(errorMessage);
  });


const endpoint = 'https://remarkable-rainstorm.flywheelsites.com/wp-json/wp/v2/posts/?per_page=100';
const postList = document.getElementById('post-list');
const carouselContainer = document.getElementById('carousel-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const itemsPerPage = 4;
let currentPage = 0;
let posts = [];

function renderPost(post) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = `blogdetails.html?id=${post.id}`;

  if (post._embedded['wp:featuredmedia']) {
    const img = new Image();
    img.src = post._embedded['wp:featuredmedia'][0].source_url;
    img.alt = post.title.rendered;
    link.appendChild(img);
  }

  li.appendChild(link);
  postList.appendChild(li);
  const title = document.createElement('h2');
  title.innerText = post.title.rendered;
  link.appendChild(title);
}

function renderPosts(startIndex) {
  postList.innerHTML = '';
  for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
    if (i >= posts.length) {
      break;
    }
    renderPost(posts[i]);
  }
}

function fetchPosts() {
  fetch(`${endpoint}&_embed`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    })
    .then(data => {
      posts = data;
      renderPosts(0);
    })
    .catch(error => {
      console.error(error);
      const errorMessage = document.createElement('p');
      errorMessage.innerText = 'Failed to fetch posts. Please try again later.';
      carouselContainer.appendChild(errorMessage);
    });
}

function handlePrev() {
  if (currentPage > 0) {
    currentPage--;
    renderPosts(currentPage * itemsPerPage);
  }
}

function handleNext() {
  if (currentPage < Math.ceil(posts.length / itemsPerPage) - 1) {
    currentPage++;
    renderPosts(currentPage * itemsPerPage);
  }
}

prevBtn.addEventListener('click', handlePrev);
nextBtn.addEventListener('click', handleNext);

fetchPosts();

