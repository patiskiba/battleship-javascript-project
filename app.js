//! Randomly select one of the squares as the battleship location

//? All grid squares
let gridSquares = document.querySelectorAll(".gridSquare");

let gridArray = ["square0", "square1", "square2", "square3", "square4", "square5", "square6", "square7", "square8"];

function getShipIndex() {
    let shipIndex = Math.floor(Math.random() * 9); //? Between 0 to 8
    
    console.log(shipIndex);
    
    return shipIndex;  
}

//? ship square's element
let shipSquare = document.querySelector(`.square${getShipIndex()}`);

//? ship square's styling
shipSquare.classList.add("ship");
console.log(shipSquare);

console.log(gridSquares);


//! User interaction
for(let square of gridSquares) {
    square.addEventListener("click", () => {
    
        if (square.classList.contains("ship")) {
            console.log("Correct tile.");
            square.classList.add("correct");
            //? Result
            const newResult = document.createElement("h3");
            newResult.innerText = "You win!"
            //? Where I want to add result element:
            const newResultContainer = document.getElementById("newResultContainer");
            //? Append result element to container:
            newResultContainer.appendChild(newResult);
        } else {
            console.log("Incorrect tile.");
            square.classList.add("incorrect");
        }
    
    })
}

