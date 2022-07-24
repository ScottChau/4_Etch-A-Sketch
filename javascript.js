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

// Highlighted Grid
function mouseOver() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `${randomColor()}`;
    }); // adding eventlistener to each div "item"
  });
}

// Make random color
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function reset() {
  existingGrids = document.querySelectorAll(".item");
  let grid = parseInt(
    prompt("How many grid do you want for your sketch? eg. 16 32 48 64")
  );
  if (grid <= 100) {
    existingGrids.forEach((item) => {
      item.remove();
    });
    return makeGrid(grid, grid);
  } else {
    return alert("Invaild input, Please enter 1 to 100");
  }
}

button.addEventListener("click", reset);

makeGrid(32, 32);
