//create the js objects
const container = document.querySelector(".container");
const fragments = document.createDocumentFragment();
const createAnother = document.querySelector(".btn");


//initial sketch grid
for (let i = 0; i < 256; i++) {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    grids.style.width = "6.25%";
    grids.style.height = "6.25%";
    grids.style.backgroundColor = "beige";
    grids.style.boxSizing = "border-box";
    //grids.style.border = "1px solid white";
    fragments.appendChild(grids);
    

    grids.addEventListener('mouseover', e => {
        grids.style.backgroundColor = "black";
    })
}


//create a new user specific grid.
function newGrid(calculatedSize, calculatedNumber) {
    container.replaceChildren()
    for (let i = 0; i < calculatedNumber; i++) {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    grids.style.width = `${calculatedSize}%`;
    grids.style.height = `${calculatedSize}%`;
    grids.style.backgroundColor = "beige";
    grids.style.boxSizing = "border-box";
    //grids.style.border = "1px solid white";
    fragments.appendChild(grids);
    container.appendChild(fragments);
    

    grids.addEventListener('mouseover', e => {
        grids.style.backgroundColor = "black";
    })
}
}

createAnother.addEventListener('click', e => {
    let userInput = prompt("Please select a number of grids per side!\nMax Allowed is 100");
    if (userInput > 100) {
        userInput = 100
    }
    let calculatedNumber = userInput * userInput;
    let calculatedSize = 100/userInput;
    newGrid(calculatedSize,calculatedNumber);
}
)
//appends
container.appendChild(fragments);