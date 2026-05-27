document.addEventListener("DOMContentLoaded", () => {
  // textContent
  const btnTextContent = document.getElementById("btn-text-content");
  const tituloPrincipal = document.getElementById("titulo-principal");

  btnTextContent.addEventListener("click", () => {
    tituloPrincipal.textContent = "Titulo modificado";
  });

  // innerHTML
  const btnInnerHTML = document.getElementById("btn-inner-html");
  const parrafoCambiar = document.getElementById("parrafo-cambiar");

  btnInnerHTML.addEventListener("click", () => {
    parrafoCambiar.innerHTML = "El parrafo cambió";
  });

  // src (le pregunté a GPT porque no me salió )
  const btnCambiarImg = document.getElementById("btn-cambiar-img");
  const imagenCambiar = document.getElementById("imagen-cambiar");

  btnCambiarImg.addEventListener("click", () => {
    imagenCambiar.src = "https://picsum.photos/id/1015/400/250";
      imagenCambiar.alt = "Nueva Imagen de Internet";
    });

  // value e input
  const btnAlerta = document.getElementById("btn-alerta");
  const inputAlerta = document.getElementById("input-alerta");

  btnAlerta.addEventListener("click", () => {
    const textoUsuario = inputAlerta.value;
    if (textoUsuario.trim() === "") {
      alert("Escribe algo, no se puede entregar un mensaje vacío.");
    } else {
        alert(`Escribiste: ${textoUsuario}`);
      }
  });

  // classList.add() y remove()
  const btnAddClase = document.getElementById("btn-add-clase");
  const btnRemoveClase = document.getElementById("btn-remove-clase");
  const textoClase = document.getElementById("texto-clase");

  btnAddClase.addEventListener("click", () => {
    textoClase.classList.add("estilo-nuevo");
  });

  btnRemoveClase.addEventListener("click", () => {
    textoClase.classList.remove("estilo-nuevo");
  });

  // classList.toggle() Modo Oscuro
  const btnModoOscuro = document.getElementById("btn-modo-oscuro");
    
  btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    if (document.body.classList.contains("modo-oscuro")) {
      btnModoOscuro.textContent = "Modo Claro";
    } else {
      btnModoOscuro.textContent = "Modo Oscuro";
    }
  });

  // createElement() y appendChild()
  const btnAgregarLista = document.getElementById("btn-agregar-lista");
  const listaAgregar = document.getElementById("lista-agregar");
  let contadorItems = 2;

  btnAgregarLista.addEventListener("click", () => {
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = `Coso número ${contadorItems}`;
      listaAgregar.appendChild(nuevoItem);
      contadorItems++;
  });

  // Formulario
  const formulario = document.getElementById("formulario-mejorado");
  const error = document.getElementById("error");
  const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita recargar página

    const nombre = document.getElementById("form-nombre").value.trim();
    const color = document.getElementById("form-color").value;
    const mensaje = document.getElementById("form-mensaje").value.trim();

    // VALIDACIÓN
    if (nombre === "" || color === "" || mensaje === "") {
      error.textContent = "Error: todos los campos son obligatorios";
      error.style.display = "block"; // Lo mostramos en pantalla
      return;
    }

    // Si es válido, ocultamos el error
    error.style.display = "none";

    // cambiar el color del titulo dependiendo del color elegido
    // se limpia lo puesto anteriormente para no acumular clases de colores
    tituloPrincipal.classList.remove("txt-azul", "txt-verde", "txt-rojo");
    // agregamos la nueva clase de color
    tituloPrincipal.classList.add(`txt-${color}`);

    // CREAR TARJETA NUEVA
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.className = `tarjeta-dinamica borde-${color}`;
    nuevaTarjeta.innerHTML = `<h3>${nombre}</h3><p>"${mensaje}"</p>`;

    // Colocar la tarjeta en la pantalla
    contenedorTarjetas.appendChild(nuevaTarjeta);

    // Limpiar formulario
    formulario.reset();
  });
});