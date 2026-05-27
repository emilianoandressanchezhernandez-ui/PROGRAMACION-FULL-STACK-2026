document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const inputTarea = document.getElementById("tarea");
    const errorTarea = document.getElementById("error");
    const listaTareas = document.getElementById("lista-tareas");
    
    // Contadores
    const txtTotal = document.getElementById("total-tareas");
    const txtPendientes = document.getElementById("tareas-pendientes");
    const txtCompletadas = document.getElementById("tareas-completadas");
    
    // Botones de acción
    const btnBorrarTodo = document.getElementById("btn-borrar-todo");
    const botonesFiltro = document.querySelectorAll(".btn-filtro");

    let filtroActual = "todas";

    function actualizar() {
        const todasLasTareas = document.querySelectorAll(".item-tarea");
        
        let total = todasLasTareas.length;
        let completadas = 0;
        let pendientes = 0;

        todasLasTareas.forEach(tarea => {
            // Evaluamos si tiene la clase completada
            const esCompletada = tarea.classList.contains("completada");
            
            if (esCompletada) {
                completadas++;
            } else {
                pendientes++;
            }

            // APLICACIÓN DEL FILTRO DE VISIBILIDAD ( lo hice con IA)
            if (filtroActual === "todas") {
                tarea.style.display = "flex";
            } else if (filtroActual === "completadas" && esCompletada) {
                tarea.style.display = "flex";
            } else if (filtroActual === "pendientes" && !esCompletada) {
                tarea.style.display = "flex";
            } else {
                tarea.style.display = "none"; // Oculta si no coincide con el filtro
            }
        });

        // Actualizar los números en el DOM
        txtTotal.textContent = total;
        txtPendientes.textContent = pendientes;
        txtCompletadas.textContent = completadas;
    }


    // CREAR Y AGREGAR TAREA
    formulario.addEventListener("submit", (evento) => {
        // Evitar que se recargue la página
        evento.preventDefault();

        // Leer el valor del input y limpiar espacios vacíos
        const textoIn = inputTarea.value.trim();

        // VALIDACION: verificar que no esté vacío
        if (textoIn === "") {
            // Mostrar mensaje de error
            errorTarea.textContent = "Error: No puedes añadir una tarea vacía.";
            errorTarea.style.display = "block";
            return; // Corta la ejecución
        }
        // Si es válido, ocultamos el error anterior
        errorTarea.style.display = "none";

        // Crear el elemento nuevo
        const nuevaTarea = document.createElement("li");
        nuevaTarea.className = "item-tarea";

        nuevaTarea.innerHTML = `
            <span class="texto-tarea">${textoIn}</span>
            <div class="acciones-tarea">
                <button class="btn-completar">Completar</button>
                <button class="btn-eliminar-item">Eliminar</button>
            </div>
        `;
        
        // Agregar eventos a los botones de la nueva tarea
        // Botón Completar
        const btnCompletar = nuevaTarea.querySelector(".btn-completar");
        btnCompletar.addEventListener("click", () => {
            nuevaTarea.classList.toggle("completada");
            
            // Cambiar el texto del botón según el estado
            if(nuevaTarea.classList.contains("completada")) {
                btnCompletar.textContent = "Desmarcar";
            } else {
                btnCompletar.textContent = "Completar";
            }
            
            actualizar(); // Refresca contadores y filtros
        });

        // Botón Eliminar
        const btnEliminar = nuevaTarea.querySelector(".btn-eliminar-item");
        btnEliminar.addEventListener("click", () => {
            nuevaTarea.remove();
            actualizar(); // Refresca contadores y filtros
        });


        // 4. Agregarlo a la lista del HTML
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el input para la siguiente tarea
        inputTarea.value = "";

        // Refrescar la aplicación
        actualizar();
    });


    // BORRAR TODAS LAS TAREAS
    btnBorrarTodo.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas eliminar TODAS las tareas?")) {
            listaTareas.innerHTML = ""; // Vaciamos el contenedor de la lista
            actualizar();
        }
    });


    // botones de filtros
    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", () => {
            // Remover la clase 'activo' de todos los botones de filtro
            botonesFiltro.forEach(b => b.classList.remove("activo"));
            
            // Añadirla al botón presionado
            boton.classList.add("activo");

            // Guardar el filtro seleccionado según su atributo 'data-filtro'
            filtroActual = boton.getAttribute("data-filtro");

            // Ejecutar la actualización para ocultar o mostrar las tareas correspondientes
            actualizar();
        });
    });

});