console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const article = document.createElement("article");
const productBody = document.createElement("section");
const textContainer = document.createElement("div");
const productName = document.createElement("h2");
const productCategories = document.createElement("ul");
const productCategory1 = document.createElement("li");
const productCategory2 = document.createElement("li");
const productCategory3 = document.createElement("li");
const productDescription = document.createElement("p");
const imageContainer = document.createElement("div");
const productImage = document.createElement("img");
const imageSource = document.createElement("src");
const footer = document.createElement("footer");
const priceDisplay = document.createElement("span");
const buyButton = document.createElement("button");

article.classList.add("product");
productBody.classList.add("product__body");
textContainer.classList.add("product__text-container");
productName.classList.add("product__name");
productCategories.classList.add("product__categories");
productCategory1.classList.add("product__category");
productCategory2.classList.add("product__category");
productCategory3.classList.add("product__category");
productDescription.classList.add("product__description");
imageContainer.classList.add("product__image-container");
footer.classList.add("product__footer");
priceDisplay.classList.add("product__price");
buyButton.classList.add("product__buy-button");

document.body.append(article);
article.append(productBody, footer);
productBody.append(textContainer, imageContainer);
textContainer.append(productName, productCategories, productDescription);
productCategories.append(productCategory1, productCategory2, productCategory3);
imageContainer.append(productImage);
productImage.append(imageSource);
footer.append(priceDisplay, buyButton);

productDescription.innerHTML = description;
productName.innerHTML = name;
productCategory1.innerHTML = category1;
productCategory2.innerHTML = category2;
productCategory3.innerHTML = category3;
imageContainer.innerHTML = `<img class="product__image" src="${imageSrc}">`;
priceDisplay.innerHTML = price;
buyButton.innerHTML = "Buy";

const button = article.querySelector("button");
button.addEventListener("click", () => {
  console.log("Name: " + name);
  console.log("Price: " + price);
});
