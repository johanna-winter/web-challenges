console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const secondPost = document.createElement("article");
secondPost.classList.add("post");
document.body.append(secondPost);

const secondPostContent = document.createElement("p");
secondPostContent.classList.add("post__content");
secondPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
secondPost.append(secondPostContent);

const secondPostFooter = document.createElement("footer");
secondPostFooter.classList.add("post__footer");
secondPost.append(secondPostFooter);

const secondPostUsername = document.createElement("span");
secondPostUsername.classList.add("post__username");
secondPostUsername.textContent = "@username";
secondPostFooter.append(secondPostUsername);

const secondPostButton = document.createElement("button");
secondPostButton.classList.add("post__button");
secondPostButton.textContent = "♥ Like";
secondPostFooter.append(secondPostButton);

secondPostButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
