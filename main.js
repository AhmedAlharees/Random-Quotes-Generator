const btn = document.querySelector(".btn");

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

function rand() {
  let randomValue = Math.ceil(Math.random() * 100 + 1);
  return randomValue;
}

// click event listener to fetch the quotes from type.fit api
btn.addEventListener("click", () => {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const randValue = rand();
      quote.innerText = `"${data[randValue].text}"`;
      author.innerText = `- ${
        data[randValue].author == null ? "Unknown" : data[randValue].author
      }`;
    });
});

// Adding event listener to the button to play the page turning sound effect.
btn.addEventListener("click", playSound);
function playSound() {
  const audio = new Audio("sound/page-flip-03.mp3");
  audio.playbackRate = 1.3;
  audio.play();
}
