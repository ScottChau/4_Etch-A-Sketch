const container = document.querySelector("#container");

function makeGrid(col, row) {
  for (let i = 0; i < col * row; i++) {
    gridItem = document.createElement("div");
    gridItem.classList.add(`item`);
    // gridItem.classList.add(`item${[i]}`);
    container.appendChild(gridItem);
  }
  mouseOver();
}

function mouseOver() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `${randomColor()}`;
    }); // adding eventlistener to each div "item"
  });
}

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

makeGrid(16, 16);
