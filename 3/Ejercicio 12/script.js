const formulario = document.getElementById("formulario");

const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const tipo = document.getElementById("tipo");
const estado = document.getElementById("estado");
const calificacion = document.getElementById("calificacion");
const imagen = document.getElementById("imagen");

const contenedor = document.getElementById("contenedor");

const contador = document.getElementById("contador");
const mensajeVacio = document.getElementById("mensaje-vacio");

const buscador = document.getElementById("buscador");

const btnOrdenar = document.getElementById("btn-ordenar");
const btnVista = document.getElementById("btn-vista");

// array

let coleccion =
    JSON.parse(localStorage.getItem("coleccion")) || [];

let vistaLista = false;

// guardar

function guardarDatos() {
    localStorage.setItem(
        "coleccion",
        JSON.stringify(coleccion)
    );
}

// contador

function actualizarContador() {

    contador.textContent =
        `Total elementos: ${coleccion.length}`;

    if (coleccion.length === 0) {
        mensajeVacio.style.display = "block";
    } else {
        mensajeVacio.style.display = "none";
    }
}

// cambiar estados

function siguienteEstado(estadoActual) {

    if (estadoActual === "Pendiente") {
        return "En progreso";
    }

    if (estadoActual === "En progreso") {
        return "Terminado";
    }

    return "Pendiente";
}

// tarjetas

function mostrarElementos(lista = coleccion) {

    contenedor.innerHTML = "";

    lista.forEach(elemento => {
        let claseTipo = "";

        if (elemento.tipo === "Videojuego") {
            claseTipo = "videojuego";
        }
        if (elemento.tipo === "Película") {
            claseTipo = "pelicula";
        }
        if (elemento.tipo === "Serie") {
            claseTipo = "serie";
        }

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");
        tarjeta.classList.add(claseTipo);

        tarjeta.dataset.tipo = elemento.tipo;
        tarjeta.dataset.estado = elemento.estado;

        tarjeta.innerHTML = `
        <img src="${elemento.imagen}" alt="${elemento.titulo}" onerror="this.src='https://placehold.co/400x200?text=Sin+Imagen'">
            
            <div class="contenido-tarjeta">

                <h3>${elemento.titulo}</h3>

                <p class="descripcion">
                    ${elemento.descripcion}
                </p>

                <p class="tipo">
                    Tipo: ${elemento.tipo}
                </p>

                <p class="estado">
                    Estado: ${elemento.estado}
                </p>

                <p class="calificacion">
                    Calificación: ${elemento.calificacion}/5
                </p>

                <div class="botones-tarjeta">

                    <button
                        class="btn-eliminar"
                        onclick="eliminarElemento(${elemento.id})"
                    >
                        Eliminar
                    </button>

                    <button
                        class="btn-cambiar"
                        onclick="cambiarEstado(${elemento.id})"
                    >
                        Cambiar estado
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
    actualizarContador();
}

// agregar

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    if (
        titulo.value.trim() === "" ||
        descripcion.value.trim() === "" ||
        tipo.value === "" ||
        estado.value === "" ||
        imagen.value.trim() === "" ||
        calificacion.value === ""
    )
    {
        alert("Complete todos los campos");
        return;
}

if ( calificacion.value < 1 || calificacion.value > 5 ) {
    alert(
        "La calificación debe estar entre 1 y 5"
    );
    return;
}

    const nuevoElemento = {

        id: Date.now(),
        titulo: titulo.value,
        descripcion: descripcion.value,
        tipo: tipo.value,
        estado: estado.value,
        calificacion: calificacion.value,
        imagen: imagen.value

    };

    coleccion.push(nuevoElemento);
    guardarDatos();
    mostrarElementos();
    formulario.reset();

});

// eliminar

function eliminarElemento(id) {
    coleccion = coleccion.filter(
        elemento => elemento.id !== id
    );
    guardarDatos();
    mostrarElementos();
}

// cambiar estado

function cambiarEstado(id) {

    const elemento = coleccion.find(
        item => item.id === id
    );
    elemento.estado =
        siguienteEstado(elemento.estado);

    guardarDatos();
    mostrarElementos();
}

// buscador

buscador.addEventListener("input", function () {

    const texto =
        buscador.value.toLowerCase();

    const resultados = coleccion.filter(
        elemento =>
            elemento.titulo.toLowerCase().includes(texto)
    );
    mostrarElementos(resultados);
});

// ORDENAR A-Z

btnOrdenar.addEventListener("click", () => {

    coleccion.sort((a, b) =>
        a.titulo.localeCompare(b.titulo)
    );
    guardarDatos();
    mostrarElementos();
});

// cambiar vista

btnVista.addEventListener("click", () => {
    
    document.body.classList.toggle("modo-oscuro");
    if (document.body.classList.contains("modo-oscuro")) {
        btnVista.textContent = "Modo claro";
    } else {
        btnVista.textContent = "Modo oscuro";
    }
});

// filtro tipos

document.getElementById("tipo-todos").addEventListener("click", () => {
    mostrarElementos(coleccion);
});

document.getElementById("tipo-videojuego").addEventListener("click", () => {
    mostrarElementos(
        coleccion.filter(
            item => item.tipo === "Videojuego"
        )
    );
});

document.getElementById("tipo-pelicula").addEventListener("click", () => {
    mostrarElementos(
        coleccion.filter(
            item => item.tipo === "Película"
        )
    );
});

document.getElementById("tipo-serie")
.addEventListener("click", () => {
    mostrarElementos(
        coleccion.filter(
            item => item.tipo === "Serie"
        )
    );
});

// filtro estado

document.getElementById("estado-todos").addEventListener("click", () => {
    mostrarElementos(coleccion);
});

document.getElementById("estado-pendiente").addEventListener("click", () => {
    mostrarElementos(
        coleccion.filter(
            item => item.estado === "Pendiente"
        )
    );
});

document.getElementById("estado-progreso").addEventListener("click", () => {
    mostrarElementos(
        coleccion.filter(
            item => item.estado === "En progreso"
        )
    );
});

document.getElementById("estado-terminado").addEventListener("click", () => {
    mostrarElementos(
        coleccion.filter(
            item => item.estado === "Terminado"
        )
    );
});

// carga inicial
mostrarElementos();