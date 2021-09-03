//VARIABLES
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito #tbody");
const vaciarCarritoBtn = document.querySelector("vaciar-carrito");
let articulosCarrito = []; 
cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando Agregar al carrito
    listaCursos.addEventListener("click", agregarCurso);
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    
    if (e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        
        leerDatosCurso(cursoSeleccionado);
    }
    
}

//Lee el contenido del html y extrae la info del curso
function leerDatosCurso(curso) {

    
    //Objeto con el contenido del curso
    const infoCurso = {
        imagen : curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio : curso.querySelector("p span").textContent,
        id : curso.querySelector("a").getAttribute("data-id"),
        cantidad : 1,
    }
    //Agrega elementos al carrito []
    articulosCarrito = [...articulosCarrito, infoCurso];
    // console.table(articulosCarrito);
    carritoHTML(articulosCarrito);
}

//Muesta el carrito de compras en el HTML
function carritoHTML () {
    //limpiar el html
    limpiarCarrito();
    articulosCarrito.forEach( (curso)=>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="" class="borrar-curso" data-id=${id}> x </a> 
            </td>
        `;
        //Agrega el HTML del carrito en el Tbody
        contenedorCarrito.appendChild(row);
    }) 
}

function limpiarCarrito () {
    //forma lenta
    // contenedorCarrito.innerHTML = "";
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}