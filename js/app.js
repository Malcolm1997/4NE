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
    paginaElegida = "h"
} else {
    paginaElegida = localStorage.getItem("paginaElegida")
}

const tipoDePagina = (atributo, tipo) => {
    localStorage.setItem(atributo, tipo);
}

let paginasDeRecursos = {
    'renovables' : {
        'servicios': {
            'linkName': ['','','','',''],
            'name':['Desarrollo Integral de RSU', 'Desarrollo Integral de Centrales Fotovoltaicas', 'Desarrollo Integral de Planta de BioGas', 'Desarrollo de Biofertilizantes', 'Desarrollos Personalizados']
        },
        'proyectos': {
            'nuevo': {
                'linkName': ['RSUChicas'],
                'name':['RSU - Las Chicas, Córdoba']
            },
            'finalizado': {
                'linkName': ['Aerogenerador', 'RenovarTrebol', 'Potrerillo', 'Cacheuta', 'Ullum', 'Biof', 'LasJunturas', 'LaPampa', 'Goldpor', 'BiogasFenix', 'IlPorco', 'Forsu', 'LosLLanos', 'SanAlonso', 'Solares'],
                'name':['Ingenieria de producto IWP-100', 'Proyecto Renovar - PE El Trébol', 'Central Hidroelectrica de Potrerillo', 'Central Hidroelectrica de Cacheuta', 'Central Hidroelectrica de Ullum', 'Proyecto BioF', 'Embio - Las Junturas', 'Planta de Generación - La Pampa', 'Planta de Generación - Goldpor', 'Diseño de Planta de Biogas - Fenix', 'Evaluacion de factibilidad de Planta de Biogas - Il Porco', 'Forsu en Colombia', 'Frigorífico Cerdo de Los Llanos', 'Cental Térmica - San Alonso', 'Proyectos Solares' ]
            }
        },
    },
    //HIDROCARBUROS
    'hidrocarburos': {
        'servicios':{
            'linkName': ['','','','','','',''],
            'name':['Oil & Gas', 'Ingeniería Eléctrica', 'Ingeniería Mecánica', 'Deasarrollo en Energia Nuclear', 'Desarrollo Integral en la Agroindustria', 'Desarrollos Integrales en Mineria', 'Desarrllo Personalizados']
        },
        'proyectos':{
            'nuevo':{
                'linkName': ['Nestor'],
                'name':['Gasoducto Nestor Kirchner']
            },
            'finalizado':{
                'linkName': ['LinderoAtravesado', 'Nogales', 'BellVille', 'Hitachi', 'Embalse', 'Cargil', 'Tolva', 'Algodon', 'CarpasArgentinas'],
                'name':['Yacimiento en Lindero Atravesado', 'Los Nogales', 'Bell Ville', 'Hitachi Energy', 'Central Atomica Embalse', 'Provimi (Cargil)', 'Tolva Autodescargable', 'Cocechadora de Alghodon', 'Mina de Litio - Catamarca']
            }
        },
    }
}

const irA = (pagina) => {
    paginaUnica(false)
    window.open(`./p${paginaElegida}/${pagina}.html`, "_self");
}



const paginaUnica = esUnica => {
    localStorage.setItem("esUnica", esUnica);
}

let ulServicios = document.querySelectorAll(".servicios")
let ulProyectosNuevos = document.querySelectorAll(".proyectosNuevos")
let ulProyectosFinalizado = document.querySelectorAll(".proyectosFinalizados")
let ulEnObra = document.querySelectorAll("#proyectosEnObra")
let ulFinalizado = document.querySelectorAll("#proyectosTerminados")
let seccionServicios = document.querySelectorAll("#mainServicios")
let esUnica = localStorage.getItem("esUnica")
ulServicios.innerHTML = ""

if (paginaElegida == 'r' ) {
/*     // Renderiza Servicios
    for (let i = 0; i < paginasDeRecursos.renovables.servicios.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulServicios.forEach( el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./pr/servicios${paginasDeRecursos.renovables.servicios.linkName[i]}.html" onclick="paginaUnica(false)" >${paginasDeRecursos.renovables.servicios.name[i]}</a></li>`)
        } else {
            ulServicios.forEach( el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./servicios${paginasDeRecursos.renovables.servicios.linkName[i]}.html" >${paginasDeRecursos.renovables.servicios.name[i]}</a></li>`)
        }
    } */
    // Renderiza Proyectos nuevos
    for (let i = 0; i < paginasDeRecursos.renovables.proyectos.nuevo.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./pr/proyecto${paginasDeRecursos.renovables.proyectos.nuevo.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.renovables.proyectos.nuevo.name[i]}</a></li>`)
        } else {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./proyecto${paginasDeRecursos.renovables.proyectos.nuevo.linkName[i]}.html" >${paginasDeRecursos.renovables.proyectos.nuevo.name[i]}</a></li>`)
        }
    }
    //Renderiza Proyectos Terminados
    for (let i = 0; i < paginasDeRecursos.renovables.proyectos.finalizado.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./pr/proyecto${paginasDeRecursos.renovables.proyectos.finalizado.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.renovables.proyectos.finalizado.name[i]}</a></li>`)
        } else {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./proyecto${paginasDeRecursos.renovables.proyectos.finalizado.linkName[i]}.html" >${paginasDeRecursos.renovables.proyectos.finalizado.name[i]}</a></li>`)
        }
    }
    
    for(let i = 0; i < paginasDeRecursos.renovables.servicios.linkName.length; i++){
        seccionServicios.forEach(el => {
            el.innerHTML += `
                    <section class="cardServicios">
                        <div>
                            <h3>${paginasDeRecursos.renovables.servicios.name[i]}</h3>
                        </div>
                    <section>
                `
        })
    }

    //Renderiza Proyectos Nuevos En Pagina Proyecto
    for(let i = 0; i < paginasDeRecursos.renovables.proyectos.nuevo.linkName.length; i++){
        ulEnObra.forEach(el => {
            el.innerHTML += `
                    <li>
                        <span>${paginasDeRecursos.renovables.proyectos.nuevo.name[i]}</span>
                        <div>
                            <a href="./proyecto${paginasDeRecursos.renovables.proyectos.nuevo.linkName[i]}.html">Ver Proyecto</a>
                        </div>
                    </li>
                `
        })
    }

    //Renderiza Proyectos Finalizados En Pagina Proyecto
    for(let i = 0; i < paginasDeRecursos.renovables.proyectos.finalizado.linkName.length; i++){
        ulFinalizado.forEach(el => {
            el.innerHTML += `
                    <li>
                        <span>${paginasDeRecursos.renovables.proyectos.finalizado.name[i]}</span>
                        <div>
                            <a href="./proyecto${paginasDeRecursos.renovables.proyectos.finalizado.linkName[i]}.html">Ver Proyecto</a>
                        </div>
                    </li>
                `
        })
    }

} else {
/*     //Renderiza Servicios
    for (let i = 0; i < paginasDeRecursos.hidrocarburos.servicios.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulServicios.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./ph/servicios${paginasDeRecursos.hidrocarburos.servicios.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.hidrocarburos.servicios.name[i]}</a></li>`)
        } else {
            ulServicios.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./servicios${paginasDeRecursos.hidrocarburos.servicios.linkName[i]}.html" >${paginasDeRecursos.hidrocarburos.servicios.name[i]}</a></li>`)
        }
    } */
    //Renderiza Proyectos Nuevos
    for (let i = 0; i < paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./ph/proyecto${paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.hidrocarburos.proyectos.nuevo.name[i]}</a></li>`)
        } else {
            ulProyectosNuevos.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./proyecto${paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName[i]}.html" >${paginasDeRecursos.hidrocarburos.proyectos.nuevo.name[i]}</a></li>`)
        }
    }
    //Renderiza Proyectos Terminados
    for (let i = 0; i < paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName.length; i++) {
        if (localStorage.getItem("esUnica") == 'true') {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./ph/proyecto${paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName[i]}.html" onclick="paginaUnica(false)">${paginasDeRecursos.hidrocarburos.proyectos.finalizado.name[i]}</a></li>`)
        } else {
            ulProyectosFinalizado.forEach(el => el.innerHTML += `<br class="espaciadoBR"><li class="dropdown-item" ><a class="linkPage" href="./proyecto${paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName[i]}.html" >${paginasDeRecursos.hidrocarburos.proyectos.finalizado.name[i]}</a></li>`)
        }
    }

    for(let i = 0; i < paginasDeRecursos.hidrocarburos.servicios.linkName.length; i++){
        seccionServicios.forEach(el => {
            el.innerHTML += `
                    <section class="cardServicios">
                        <div>
                            <h3>${paginasDeRecursos.hidrocarburos.servicios.name[i]}</h3>
                        </div>
                    <section>
                `
        })
    }

    //Renderiza Proyectos Nuevos En Pagina Proyecto
    for(let i = 0; i < paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName.length; i++){
        ulEnObra.forEach(el => {
            el.innerHTML += `
                    <li>
                        <span>${paginasDeRecursos.hidrocarburos.proyectos.nuevo.name[i]}</span>
                        <div>
                            <a href="./proyecto${paginasDeRecursos.hidrocarburos.proyectos.nuevo.linkName[i]}.html">Ver Proyecto</a>
                        </div>
                    </li>
                `
        })
    }

    //Renderiza Proyectos Finalizados En Pagina Proyecto
    for(let i = 0; i < paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName.length; i++){
        ulFinalizado.forEach(el => {
            el.innerHTML += `
                    <li>
                        <span>${paginasDeRecursos.hidrocarburos.proyectos.finalizado.name[i]}</span>
                        <div>
                            <a href="./proyecto${paginasDeRecursos.hidrocarburos.proyectos.finalizado.linkName[i]}.html">Ver Proyecto</a>
                        </div>
                    </li>
                `
        })
    }
}