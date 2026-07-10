const container = document.querySelector(".container");
const fragments = document.createDocumentFragment();


for (let i = 0; i < 256; i++) {
    const createThem = document.createElement("div");
    createThem.classList.add("createThem");
    createThem.style.width = "6.25%";
    createThem.style.height = "6.25%";
    createThem.style.backgroundColor = "beige";
    createThem.style.boxSizing = "border-box";
    createThem.style.border = "1px solid white";
    fragments.appendChild(createThem);
    
container.appendChild(fragments);



createThem.addEventListener('mouseover', e => {
        createThem.style.backgroundColor = "black";
    })
}


