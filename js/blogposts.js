const endpoint =
  "https://remarkable-rainstorm.flywheelsites.com/wp-json/wp/v2/posts/?per_page=12";
const postList = document.getElementById("post-list");
const showMoreBtn = document.getElementById("show-more-btn");
const sortingFilter = document.getElementById("sorting-filter");

let startIndex = 0;
let totalPosts = 0;
let postsData = [];

function renderPost(post) {
  const li = document.createElement("li");
  li.classList.add("post-card");

  fetch(
    `https://remarkable-rainstorm.flywheelsites.com/wp-json/wp/v2/media/${post.featured_media}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch media");
      }
      return response.json();
    })
    .then((media) => {
      const image = document.createElement("img");
      image.classList.add("post-image");
      image.src = media.source_url;
      image.alt = post.title.rendered;
      li.appendChild(image);

      const title = document.createElement("h2");
      title.classList.add("post-title");
      title.innerText = post.title.rendered;
      li.appendChild(title);

      const content = document.createElement("p");
      content.classList.add("post-excerpt");
      content.innerHTML = post.excerpt.rendered;
      li.appendChild(content);

      const readMoreBtn = document.createElement("a");
      readMoreBtn.classList.add("read-more-btn");
      readMoreBtn.innerText = "Read More";
      readMoreBtn.href = `blogdetails.html?id=${post.id}`;
      li.appendChild(readMoreBtn);
    })
    .catch((error) => {
      console.error(error);
      const errorMessage = document.createElement("p");
      errorMessage.innerText = "Failed to fetch media. Please try again later.";
      li.appendChild(errorMessage);
    });

  postList.appendChild(li);
}
function fetchPosts(sortOrder) {
  let fetchURL = endpoint;

  if (sortOrder === "az") {
    fetchURL += "&orderby=title&order=asc";
  } else if (sortOrder === "za") {
    fetchURL += "&orderby=title&order=desc";
  }

  fetch(fetchURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    })
    .then((data) => {
      postsData = data;
      totalPosts = postsData.length;
      renderPosts();
    })
    .catch((error) => {
      console.error(error);
      const errorMessage = document.createElement("p");
      errorMessage.innerText = "Failed to fetch posts. Please try again later.";
      postList.appendChild(errorMessage);
    });
}

function renderPosts() {
  const endIndex = Math.min(startIndex + 10, totalPosts);
  const postsToRender = postsData.slice(startIndex, endIndex);
  postsToRender.forEach((post) => renderPost(post));

  if (endIndex >= totalPosts) {
    showMoreBtn.style.display = "none";
  } else {
    showMoreBtn.style.display = "block";
  }
}

function fetchMorePosts() {
  startIndex += 10;
  renderPosts();
}

fetchPosts();
showMoreBtn.addEventListener("click", fetchMorePosts);

sortingFilter.addEventListener("change", () => {
  const sortOrder = sortingFilter.value;
  postList.innerHTML = "";
  startIndex = 0;
  fetchPosts(sortOrder);
});
