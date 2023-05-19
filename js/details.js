function goBack() {
  window.history.back();
}

const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const postTitleEl = document.getElementById('post-title');
const postContentEl = document.getElementById('post-content');

fetch(`https://remarkable-rainstorm.flywheelsites.com/wp-json/wp/v2/posts/${postId}`)
  .then(response => response.json())
  .then(data => {
    postTitleEl.innerText = data.title.rendered;
    postContentEl.innerHTML = data.content.rendered;

    // Get all images in the post content
    const images = postContentEl.getElementsByTagName('img');

    // Add click event listeners to each image
    Array.from(images).forEach(image => {
      // Create a div to display the enlarged image
      const enlargedImgDiv = document.createElement('div');
      enlargedImgDiv.classList.add('enlarged-img');
      enlargedImgDiv.style.display = 'none';

      // Create the enlarged image element and add it to the div
      const enlargedImg = new Image();
      enlargedImg.src = image.src;
      enlargedImg.classList.add('enlarged-img__image');
      enlargedImgDiv.appendChild(enlargedImg);

      // Add click event listener to the image
      image.addEventListener('click', () => {
        postContentEl.style.display = 'none';
        enlargedImgDiv.style.display = 'flex';
        document.body.appendChild(enlargedImgDiv);
      });

      // Add click event listener to the enlarged image div
      enlargedImgDiv.addEventListener('click', () => {
        enlargedImgDiv.style.display = 'none';
        postContentEl.style.display = 'block';
        document.body.removeChild(enlargedImgDiv);
      });
    });
  })
  .catch(error => console.error(error));
