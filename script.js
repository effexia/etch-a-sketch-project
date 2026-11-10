function makeGrid(size) {
  let container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 1; i <= size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.setProperty("flex-basis", `calc(100% / ${size})`);
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => {
      let random = () => Math.floor(Math.random() * 256);
      cell.style.backgroundColor = `rgb(${random()} ${random()} ${random()})`;
    });
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let size = Number(
    prompt(
      "Please enter the number of squares per side for the new grid",
      "16",
    ),
  );
  if (size > 0 && size < 100) {
    makeGrid(size);
  } else alert("Please enter a value less than 100")
});

makeGrid(16);
