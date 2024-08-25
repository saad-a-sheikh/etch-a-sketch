function getDimensions () {
    // Prompt the user for the number of rows and columns
    const rows = parseInt(prompt('Enter the number of rows for the grid:'), 10);
    const cols = parseInt(prompt('Enter the number of columns for the grid:'), 10);

    // Validate and create the grid if valid numbers are provided
    if (!isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0 && rows <= 100 && cols <= 100) {
        createGrid(rows, cols);
    } else {
        alert('Invalid input. Please enter positive numbers less than or equal to 100.');
    }
}

function setSize (rows, cols) {
    // Variables for storing viewport dimensions 
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


    // Getting the root and CSS variables
    var root = document.querySelector(":root");

    // Changing the values of the CSS variables
    root.style.setProperty("--rows", `${vw/rows}px`);
    root.style.setProperty("--cols", `${vh/cols}px`);
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
}