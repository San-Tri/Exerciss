// Función para cargar tareas desde localStorage al iniciar la página
window.addEventListener("DOMContentLoaded", function () {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || []; // JSON.parse convierte el texto plano guardado (string) de vuelta a un Array de JS

    tareasGuardadas.forEach(function (texto) {
        agregarTarea(texto);
    });
});

// Función para verificar si el usuario quiere guardar una tarea vácia
document.querySelector(".boton-nueva-tarea").addEventListener("click", function () {
    let tarea = document.querySelector(".input-nueva-tarea").value;

    if (tarea.trim() === "") {
        alert("Ingrese una tarea");
    } else {
        agregarTarea(tarea);
        guardarTarea(tarea);

        //limpiamos la entrada del input
        document.querySelector(".input-nueva-tarea").value = "";
    }
});

// Función para agregar una tarea nueva al DOM
function agregarTarea(tarea) {
    let nuevaTarea = document.createElement("li");
    nuevaTarea.classList.add("n-tarea");
    nuevaTarea.innerHTML = `
        <input type="checkbox" class="checkbox">
        <p class="tarea">${tarea}</p>
        <button class="boton-eliminar">Eliminar</button>`;

    // Acción al marcar el checkbox
    nuevaTarea.querySelector(".checkbox").addEventListener("click", function () {
        let tex_tarea = nuevaTarea.querySelector(".tarea");
        let checked = this.checked;

        if (checked) {
            tex_tarea.style.color = "red";
            tex_tarea.style.textDecoration = "line-through";
        } else {
            tex_tarea.style.color = "black";
            tex_tarea.style.textDecoration = "none";
        }
    });

    // Acción al eliminar tarea
    nuevaTarea.querySelector(".boton-eliminar").addEventListener("click", function () {
        nuevaTarea.remove();
        eliminarTarea(tarea);
    });

    //Acción para poner la lista en el <ul> 
    document.querySelector(".lista-tareas").appendChild(nuevaTarea);
};

// Función para guardar una nueva tarea en localStorage
function guardarTarea(tarea) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas)); // el JSON.stringify convirte el array (tareas) en texto plano (string)
};

// Función para eliminar una tarea del localStorage
function eliminarTarea(tarea) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(t => t !== tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
};


