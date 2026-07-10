const container = document.querySelector(".container");
const fragments = document.createDocumentFragment();


for (let i = 0; i < 256; i++) {
    const createThem = document.createElement("div");
    createThem.classList.add("flexDivs");
    createThem.style.flex = 1;
    createThem.style.color = "white"
    fragments.appendChild(createThem);
}
container.appendChild(fragments);



