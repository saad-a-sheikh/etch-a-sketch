function getDimensions () {
    let rows;
    let cols;
    do {
        // Variables to store the input
        rows = parseInt(prompt('Enter the number of rows for the grid:'), 10);
        cols = parseInt(prompt('Enter the number of columns for the grid:'), 10);

    // Validate and create the grid if valid numbers are provided
        if (!isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0 && rows <= 100 && cols <= 100) {
            break;
        } else {
            alert('Invalid input. Please enter positive numbers less than or equal to 100.');
        }
    }
    while (true);
    createGrid(rows, cols);
}

function setSize (rows, cols) {
    // Variables for storing container dimensions 
    let containerWidth = 500;
    let containerHeight = 500;
    
    // Getting the root and CSS variables
    var root = document.querySelector(":root");

    // Changing the values of the CSS variables
    root.style.setProperty("--rows", `${containerWidth/rows}px`);
    root.style.setProperty("--cols", `${containerHeight/cols}px`);
}


// colours the grid-item that the mouse moved over
function colour () {
    this.classList.add("coloured");
}

// Function to create the grid
function createGrid(rows, cols) {
    const container = document.getElementById('grid-container');

    // Ensure the container is empty before creating the grid
    container.innerHTML = '';

    // Create and append grid items
    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener("mouseover", colour)
        container.appendChild(div);
    }

    // setting the size of the grid-items
    setSize(rows, cols);
}

window.onload = () => {
    // Initializing 16x16 grid
    createGrid(16, 16);

    // buttons for clearing the grid or creating a new one
    const newGrid = document.getElementById("new");
    const clearGrid = document.getElementById("clear");
    
    newGrid.addEventListener("click", getDimensions);
    clearGrid.addEventListener("click", () => {
        let items = document.querySelectorAll(".grid-item");
        items.forEach(item => {
            item.classList.remove("coloured");
        })
    })
}