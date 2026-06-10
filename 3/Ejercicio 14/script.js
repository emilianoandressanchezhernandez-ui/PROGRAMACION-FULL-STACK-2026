const btnGato = document.getElementById("btnGato");
const btnLike = document.getElementById("btnLike");
const btnDislike = document.getElementById("btnDislike");

const contenedorGato = document.getElementById("contenedorGato");
const mensaje = document.getElementById("mensaje");
const contadorLike = document.getElementById("contadorLike");
const contadorDislike = document.getElementById("contadorDislike");

const API_KEY = "live_yQ9jBMD4O5XaWWfE9e2uOCSSEZ80CGmsDnTwuQz3BuDCtznRH9PysBQkRa6x0Ku9";

let imagenActualId = "";

let likes = 0;
let dislikes = 0;

btnGato.addEventListener("click", traerGato);

btnLike.addEventListener("click", () => {
    votar(1);
});

btnDislike.addEventListener("click", () => {
    votar(-1);
});

async function traerGato() {
    mensaje.textContent = "Cargando gato...";

    try {
        const res = await fetch( "https://api.thecatapi.com/v1/images/search" );

        if (!res.ok) {
            throw new Error("No se pudo obtener el gato");
        }

        const datos = await res.json();

        const gato = datos[0];

        imagenActualId = gato.id;

        contenedorGato.innerHTML = `<img src="${gato.url}" alt="Gato" width="500">`;

        mensaje.textContent = "";

    } catch (error) {
        mensaje.textContent = "Error al cargar el gato";

        console.error(error);
    }
}

async function votar(valor) {

    if (!imagenActualId) {
        mensaje.textContent = "Primero tenes q cargar un gato";
        return;
    }

    try {
        const res = await fetch( "https://api.thecatapi.com/v1/votes", {
                    method: "POST", // enviamos al servidor
                    headers: {
                        "Content-Type":
                            "application/json",
                        "x-api-key":
                            API_KEY
                    },

                    body: JSON.stringify({
                        image_id: imagenActualId,
                        value: valor
                    })
                }
            );

        if (!res.ok) {
            throw new Error("No se pudo registrar el voto" );
        }

        await res.json();

        if (valor === 1) {
            likes++;

            contadorLike.textContent = likes;

            mensaje.textContent = "Voto registrado";
            setTimeout(() => {
            traerGato();
            }, 1500);
        } else {
            dislikes++;

            contadorDislike.textContent = dislikes;

            mensaje.textContent = "Voto registrado";

            setTimeout(() => {
            traerGato();
            }, 1500);
        } 

    } catch (error) {
        mensaje.textContent = "Error al votar";

        console.error(error);
    }
}