/**
 * BLOQUE 1: INICIALIZACIÓN (READ - Leer al cargar)
 * Se ejecuta apenas el HTML ha terminado de cargar.
 * Objetivo: Recuperar el "estado anterior" de la aplicación.
 */
window.addEventListener("DOMContentLoaded", function () {
    // 1. Intentamos leer la "base de datos" (localStorage).
    // 2. Usamos el operador '||' (Cortocircuito): Si es null, iniciamos con array vacío [] para evitar errores.
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    // Recorremos el array de objetos. 't' representa cada tarea individual {texto: "...", completada: true/false}
    tareasGuardadas.forEach(function (t) {
        agregarTarea(t); // Le pasamos el OBJETO completo a la función de pintado.
    });
});

/**
 * BLOQUE 2: CREACIÓN (CREATE - Crear tarea)
 * Captura el input, valida y crea la estructura de datos.
 */
document.querySelector(".boton-nueva-tarea").addEventListener("click", function () {
    let input = document.querySelector(".input-nueva-tarea");
    let texto = input.value;

    // Validación simple: Evitamos guardar cadenas vacías o solo espacios
    if (texto.trim() === "") {
        alert("Ingrese una tarea");
    } else {
        // --- MOMENTO CLAVE: Estructura de Datos ---
        // Ya no guardamos solo texto. Creamos un OBJETO para manejar el estado.
        const objTarea = {
            texto: texto,       // El contenido
            completada: false   // Estado inicial: Pendiente (false)
        };

        agregarTarea(objTarea); // 1. Pintar en pantalla (UI)
        guardarTarea(objTarea); // 2. Guardar en disco (Persistencia)

        // UX: Limpiamos el input para que el usuario pueda escribir otra tarea rápido
        input.value = "";
    }
});

/**
 * BLOQUE 3: RENDERIZADO Y LÓGICA (UI + Eventos)
 * Esta es la función "fábrica". Crea el HTML y le pega los comportamientos.
 * @param {Object} tareaObj - Recibe el objeto {texto, completada}
 */
function agregarTarea(tareaObj) {
    let nuevaTarea = document.createElement("li");
    nuevaTarea.classList.add("n-tarea");

    // Lógica Ternaria: Si está completada, definimos estilos de tachado; si no, estilos normales.
    // Esto asegura que al recargar la página, se vea visualmente correcta.
    let estiloTexto = tareaObj.completada ? "text-decoration: line-through; color: red;" : "color: black;";

    // Inyección de HTML dinámico (Template Literals)
    // Nota: Agregamos el atributo 'checked' dinámicamente si tareaObj.completada es true.
    nuevaTarea.innerHTML = `
        <input type="checkbox" class="checkbox" ${tareaObj.completada ? "checked" : ""}>
        <p class="tarea" style="${estiloTexto}">${tareaObj.texto}</p>
        <button class="boton-eliminar">Eliminar</button>`;

    // --- SUB-BLOQUE: Lógica de Actualización (UPDATE) ---
    nuevaTarea.querySelector(".checkbox").addEventListener("click", function () {
        let tex_tarea = nuevaTarea.querySelector(".tarea");
        let isChecked = this.checked; // Leemos el estado actual del checkbox del DOM (true/false)

        // 1. Actualización Visual (Feedback inmediato al usuario)
        if (isChecked) {
            tex_tarea.style.color = "red";
            tex_tarea.style.textDecoration = "line-through";
        } else {
            tex_tarea.style.color = "black";
            tex_tarea.style.textDecoration = "none";
        }
        
        // 2. Actualización de Datos (Persistencia)
        // Traemos la "base de datos" actual
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

        // Usamos .map() para crear una NUEVA lista actualizada.
        // Recorremos todas las tareas buscando la que coincida con la actual.
        tareas = tareas.map(t => {
            if (t.texto === tareaObj.texto) {
                // Si encontramos la tarea, retornamos una COPIA con el estado 'completada' actualizado.
                // { ...t } es el Spread Operator: copia todas las propiedades del objeto original.
                return { ...t, completada: isChecked};
            }
            return t; // Si no es la tarea que buscamos, la dejamos igual.
        });

        // Guardamos el array modificado de vuelta al localStorage
        localStorage.setItem("tareas", JSON.stringify(tareas));
    });

    // --- SUB-BLOQUE: Lógica de Eliminación (DELETE - Visual) ---
    nuevaTarea.querySelector(".boton-eliminar").addEventListener("click", function () {
        nuevaTarea.remove(); // Borra del HTML
        eliminarTarea(tareaObj); // Llama a la función que borra del Storage
    });

    // Insertamos el <li> completo en la lista <ul>
    document.querySelector(".lista-tareas").appendChild(nuevaTarea);
};

/**
 * BLOQUE 4: PERSISTENCIA (Escritura)
 * Agrega un nuevo objeto al array existente en localStorage.
 */
function guardarTarea(tareaObj) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.push(tareaObj); // Añade el objeto al final del array
    localStorage.setItem("tareas", JSON.stringify(tareas)); // Serialización: Array -> String JSON
};

/**
 * BLOQUE 5: ELIMINACIÓN (DELETE - Datos)
 * Elimina una tarea específica del array en localStorage.
 */
function eliminarTarea(tareaObj) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    
    // Usamos .filter() para crear un nuevo array que EXCLUYA la tarea actual.
    // Lógica: "Quédate con todas las tareas cuyo texto sea DIFERENTE al texto que quiero borrar".
    tareas = tareas.filter(t => t.texto !== tareaObj.texto);
    
    localStorage.setItem("tareas", JSON.stringify(tareas));
};