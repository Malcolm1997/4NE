const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    })
}

window.addEventListener("scroll", checkBoxes);
checkBoxes()

let paginaElegida

window.addEventListener('load', () => {
    paginaElegida = localStorage.getItem("paginaElegida")
})

const tipoDePagina = (tipo) => {
    paginaElegida = tipo
    console.log(paginaElegida);
    localStorage.setItem("paginaElegida", paginaElegida);
}

const irA = (pagina) => {
    window.open(`./Page ${paginaElegida}/${pagina}.html`, "_self");
}

