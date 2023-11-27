function colorSwap() {
    var color = document.getElementById("catalog-btn");
    color.classList.toggle("newColor")
}

document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

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

// i like this way better
const test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.backgroundColor = "black";
      event.target.style.color = "white";
    }, 1000);
  },
  false,
);