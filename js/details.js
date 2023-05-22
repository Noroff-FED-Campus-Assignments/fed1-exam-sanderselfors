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

    document.title = data.title.rendered;
    
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