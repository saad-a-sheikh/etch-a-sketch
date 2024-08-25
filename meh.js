const container = document.querySelector(".container");
// default value
var gridSize = 16;
var containerWidth = 400;

function createGrid(gridSize){
    for(let i = 0; i< gridSize * gridSize; i++){
        // create grid as canvas
        const square = document.createElement("div");
        const width = (containerWidth / gridSize) - 2;

        // setup square for proper display
        square.style.width = `${width}px`;
        square.style.height = `${width}px`;
        square.className = "square";
        container.appendChild(square);
    }

    // enable ability to colour
    const square = document.querySelectorAll(".square");
    colourSquare(square);
}

createGrid(gridSize);

function removeGrid(){
    const square = document.querySelectorAll(".square");
    square.forEach(function(currentValue){
        currentValue.remove();
    })
}

function createNewGrid(){
    const square = document.querySelectorAll(".square");
    newSize = Number(window.prompt("Enter grid size: "));
    if(newSize > 100){
        return window.prompt("Size cannot exceed 100.")
    }
    else{
        removeGrid(square);
        createGrid(newSize);    
    }
}

function colourSquare(square){
    square.forEach((currentValue) => {
        currentValue.addEventListener("mouseenter", () => {
            currentValue.style.backgroundColor = "violet";
        })
    });
}

const pageBody = document.querySelector("body");

const sizeButton = document.createElement("button");
sizeButton.className = "size-button";
sizeButton.textContent = "Change Grid Size";

pageBody.appendChild(sizeButton);
sizeButton.addEventListener("click",createNewGrid);