const btnChiste = document.getElementById("btnChiste");
const mensaje = document.getElementById("mensaje");

btnChiste.addEventListener("click", obtenerChiste);

async function obtenerChiste() {

    mensaje.innerHTML = "Cargando chiste...";

    //obtener valores select
    const categoria = document.getElementById("categoria").value;
    const tipo = document.getElementById("tipo").value;
    const idioma = document.getElementById("idioma").value;

    const checkboxes = document.querySelectorAll(
        '.filtros input[type="checkbox"]:checked'
    );

    const filtros = [];

    //guardar filtros seleccionados
    checkboxes.forEach(check => {
        filtros.push(check.value);
    });

    let link = `https://v2.jokeapi.dev/joke/${categoria}?lang=${idioma}`; // creo el link directo a los parámetros seleccionados 

    //agregar tipo de chiste
    if (tipo !== "any") {
        link += `&type=${tipo}`;
    }

    //agrego los filtros
    if (filtros.length > 0) {
        link += `&blacklistFlags=${filtros.join(",")}`;
    }

    try {
        const respuesta = await fetch(link, {
            // hacer petición a la API
            method: "GET", 
            headers: {
                "Accept": "application/json"
            }
        });

        // verificar la respuesta ( errores q vimos, servidor, petición, etc)
        if (!respuesta.ok) {
            throw new Error(
                `Error ${respuesta.status}: ${respuesta.statusText}`
            );
        }

        // convertir la respuesta a JSON
        const datos = await respuesta.json();

        if (datos.error) {
            throw new Error("La API no encontró resultados.");
        }

        if (datos.type === "single") {
            mensaje.innerHTML = `
                <p>${datos.joke}</p>
            `;

        } else if (datos.type === "twopart") {
            mensaje.innerHTML = `
                <p><strong>${datos.setup}</strong></p>
                <br>
                <p>${datos.delivery}</p>
            `;
        }
    } catch (error) {
        console.error(error);
        mensaje.innerHTML = `
            <h3> Error</h3>
            <p>${error.message}</p>
        `;
    }
}