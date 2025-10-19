console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

//1. render a single star (create img and append)

// const star = document.createElement("img");
// star.src = "../assets/star-empty.svg";
// starContainer.append(star);

// const star2 = document.createElement("img");
// star2.src = "../assets/star-empty.svg";
// starContainer.append(star2);

// const star3 = document.createElement("img");
// star3.src = "../assets/star-empty.svg";
// starContainer.append(star3);

// const star4 = document.createElement("img");
// star4.src = "../assets/star-empty.svg";
// starContainer.append(star4);

// const star5 = document.createElement("img");
// star5.src = "../assets/star-empty.svg";
// starContainer.append(star5);

//2. use a for loop to do the same 5 times

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  // Part 1
  // for (let i = 1; i <= 5; i++) {
  //   const star = document.createElement("img");
  //   star.src = "../assets/star-empty.svg";
  //   starContainer.append(star);
  // }

  // Part 2
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.src =
      i <= filledStars
        ? "../assets/star-filled.svg"
        : "../assets/star-empty.svg";

    // Part 3
    star.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(star);
    console.log("adding star", i);
  }

  // --^-- write or modify code above this line --^--
}

renderStars();
