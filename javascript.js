const container = document.querySelector("#container");
const button = document.querySelector("#reset");

// Create Grid
function makeGrid(col, row) {
  for (let i = 0; i < col * row; i++) {
    container.style.setProperty("--grid-rows", row);
    container.style.setProperty("--grid-cols", col);
    gridItem = document.createElement("div");
    gridItem.classList.add(`item`);
    container.appendChild(gridItem);
  }
  // have to create the grid first before using mouseOver function
  mouseOver();
}

makeGrid(32, 32);

// Highlighted Grid
function mouseOver() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.setProperty("--red", red());
      item.style.setProperty("--green", green());
      item.style.setProperty("--blue", blue());
    }); // adding eventlistener to each div "item"
  });
}
let r = 180;
let g = 180;
let b = 180;

function red() {
  if (r > 0) {
    r -= 18;
    console.log(r);
  } else if (r <= 0) {
    r += 180;
  }
  return r;
}
function green() {
  if (g > 0) {
    g -= 18;
    console.log(r);
  } else if (g <= 0) {
    g += 180;
  }
  return g;
}
function blue() {
  if (b > 0) {
    b -= 18;
    console.log(b);
  } else if (b <= 0) {
    b += 180;
  }
  return b;
}
function reset() {
  let grid = parseInt(
    prompt("How many grid do you want for your sketch? eg. 16 32 48 64")
  );
  existingGrids = document.querySelectorAll(".item");
  existingGrids.forEach((item) => {
    item.remove();
  });
  if (grid <= 100) {
    return makeGrid(grid, grid);
  } else {
    makeGrid(32, 32);
    return alert("Invaild input, Please enter 1 to 100");
  }
}

button.addEventListener("click", reset);
// Make random color

// function randomColor() {

//   let letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * letters.length)];
//   }
//   return color;
// }

// reset button
