function colorSwap() {
  var color = document.getElementById("catalog-btn");
  color.classList.toggle("newColor");
}
function mouseOver() {
  document.getElementById("demo").style.backgroundColor = "black";
  document.getElementById("demo").style.color = "white";
  document.getElementById("demo").style.scale = "115%";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
  document.getElementById("demo").style.backgroundColor = "white";
  document.getElementById("demo").style.scale = "100%";
}

// // i like this way better
// const test = document.getElementById("test");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// test.addEventListener(
//   "mouseenter",
//   (event) => {
//     // highlight the mouseenter target
//     event.target.style.backgroundColor = "white";
//     event.target.style.color = "black";

//     // reset the color after a short delay
//     setTimeout(() => {
//       event.target.style.backgroundColor = "black";
//       event.target.style.color = "white";
//     }, 1000);
//   },
//   false
// );

document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  const header = document.querySelector(".head");
  const images = [
    "./styles/hero.png",
    "./styles/hero2.png",
    "./styles/hero3.png",
  ];

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      console.log("Dot clicked");
      header.style.background = `url('${images[index]}')`;
      header.style.backgroundSize = "cover";
    });
  });

  console.log("DOM fully loaded and ready");
});

// function autoScrollBG() {
//   const header = document.querySelector(".head");
//   const heroImages = [
//     "./styles/hero.png",
//     "./styles/hero2.png",
//     "./styles/hero3.png",
//   ];
//   let currentHeroIndex = 0;

//   setInterval(() => {
//     header.style.background = `url('${heroImages[currentHeroIndex]}')`;
//     header.style.backgroundSize = "cover";
//     currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
//   }, 5000);
// }
function autoScrollBG() {
  const header = document.querySelector(".head");
  const heroImages = [
    "./styles/hero.png",
    "./styles/hero2.png",
    "./styles/hero3.png",
  ];
  let currentHeroIndex = 0;

  // Preload images to avoid flickering
  heroImages.forEach((image) => {
    const img = new Image();
    img.src = image;
  });

  header.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;

  setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    header.style.opacity = 0.2; // Fade out

    setTimeout(() => {
      header.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
      header.style.opacity = 1; // Fade in
    }, 500); // Match this to CSS transition duration
  }, 5000);
}

autoScrollBG();
