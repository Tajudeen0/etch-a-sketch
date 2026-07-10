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
    grids.style.border = "1px solid white";
    fragments.appendChild(grids);
    

    grids.addEventListener('mouseover', e => {
        grids.style.backgroundColor = "black";
    })
}


//create a new user specific grid.
function newGrid(calculatedSize, calculatedNumber) {
    for (let i = 0; i < 256; i++) {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    grids.style.width = "6.25%";
    grids.style.height = "6.25%";
    grids.style.backgroundColor = "beige";
    grids.style.boxSizing = "border-box";
    grids.style.border = "1px solid white";
    fragments.appendChild(grids);
    

    grids.addEventListener('mouseover', e => {
        grids.style.backgroundColor = "black";
    })
}
}

//appends
container.appendChild(fragments);