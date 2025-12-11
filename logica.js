// MENÚ CATEGORÍA
const btnCat = document.querySelector(".btnCat");
const menuCat = document.querySelector(".menuCat");

btnCat.addEventListener("click", (e) => {
    e.stopPropagation();
    menuCat.style.display = menuCat.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
    menuCat.style.display = "none";
});

// MENÚ FECHA
const btnFecha = document.querySelector(".btnFecha");
const menuFecha = document.querySelector(".menuFecha");

btnFecha.addEventListener("click", (e) => {
    e.stopPropagation();
    menuFecha.style.display = menuFecha.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
    menuFecha.style.display = "none";
});

// FILTRAR POR CATEGORÍA
function filtrarCategoria(cat) {

    const proyectos = document.querySelectorAll(".proyecto");
    const portada = document.getElementById("portada-principal");

    proyectos.forEach(p => {
        p.style.display = (p.dataset.categoria === cat) ? "flex" : "none";
    });

    if (cat === "juego") portada.src = "portadas/portadaJuegos.png";
    if (cat === "web") portada.src = "portadas/portadaWeb.png";

    menuCat.style.display = "none";
}

// RESTABLECER TODO
function reiniciarTodo() {
    const proyectos = document.querySelectorAll(".proyecto");
    proyectos.forEach(p => p.style.display = "flex");

    const portada = document.getElementById("portada-principal");
    portada.src = "portadas/portada inicio.png";

    menuCat.style.display = "none";
}

// ORDENAR POR FECHA
function ordenarFecha(tipo) {

    const contenedor = document.querySelector(".contenedor-proyectos");
    const proyectos = Array.from(document.querySelectorAll(".proyecto"));

    proyectos.sort((a, b) => {
        const fechaA = new Date(a.dataset.fecha);
        const fechaB = new Date(b.dataset.fecha);

        return (tipo === "nuevo") ? fechaB - fechaA : fechaA - fechaB;
    });

    proyectos.forEach(p => contenedor.appendChild(p));

    const portada = document.getElementById("portada-principal");

    if (tipo === "nuevo") portada.src = "portadas/portadaNueva.png";
    if (tipo === "viejo") portada.src = "portadas/portadaVieja.png";

    menuFecha.style.display = "none";
}
