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


if(localStorage.getItem("paginaElegida") == null){
    paginaElegida = "Hidrogenos"
} else {
    paginaElegida = localStorage.getItem("paginaElegida")
}


const tipoDePagina = (atributo, tipo) => {
    localStorage.setItem(atributo, tipo);
}

const irA = (pagina, idPagina, tipoDeRecurso) => {

    if (idPagina == -1) {
        window.open(`./Page ${paginaElegida}/${pagina}.html`, "_self");
    } else if (paginaElegida == "Renovables") {
        window.open(`./Page ${paginaElegida}${tipoDeRecurso+pagina}.html`, "_self");
    } else if (paginaElegida == "Hidrogenos"){
        window.open(`./Page ${paginaElegida}${tipoDeRecurso+pagina}.html`, "_self");
    }

}

