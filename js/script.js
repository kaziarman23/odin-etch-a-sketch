const container = document.getElementById("gridContainer");
const resizeBtn = document.getElementById("resizeBtn");

let gridSize = 16; // default grid size

// Create initial grid
createGrid(gridSize);

function createGrid(size) {
  // Clear existing grid
  container.innerHTML = "";

  // Calculate square size
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.opacity = 0; // for darkening effect
    container.appendChild(square);

    // Hover effect: progressive darkening
    square.addEventListener("mouseenter", () => {
      // Random RGB color (optional: comment out for plain black)
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Progressive darkening
      let currentOpacity = Number(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
      }

      // Apply color with opacity
      square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
    });
  }
}

// Resize button
resizeBtn.addEventListener("click", () => {
  let userInput = prompt("Enter new grid size (max 100):", gridSize);
  userInput = Number(userInput);
  if (userInput && userInput > 0 && userInput <= 100) {
    gridSize = userInput;
    createGrid(gridSize);
  } else {
    alert("Invalid input! Enter a number between 1 and 100.");
  }
});
