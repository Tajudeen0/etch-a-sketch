const container = document.querySelector(".container");
const fragments = document.createDocumentFragment();


for (let i = 0; i < 256; i++) {
    const grids = document.createElement("div");
    grids.classList.add("grids");
    grids.style.width = "6.25%";
    grids.style.height = "6.25%";
    grids.style.backgroundColor = "beige";
    grids.style.boxSizing = "border-box";
    grids.style.border = "1px solid white";
    fragments.appendChild(grids);
    
container.appendChild(fragments);



grids.addEventListener('mouseover', e => {
        grids.style.backgroundColor = "black";
    })
}


