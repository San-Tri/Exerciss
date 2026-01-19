/*
//funcion para cargar tareas del localStorage al iniciar la pagina
window.addEventListener("DOMContentLoaded", function () {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareasGuardadas.forEach(function (texto) {
        agregarTarea(texto);        
    });
});

//funcion para obtener el valor del imput y que no este vacio
document.querySelector(".boton-nueva-tarea").addEventListener("click", 
    function() {
    //Obtenemos el valor actual del input.
    let tarea = document.querySelector(".input-nueva-tarea").value;
    
    //verificamos si el campo esta vacio
    if (tarea.trim() === "") {//trim elimina los espacios vacios al inicio y final de la cadena
        alert("ingrese una tarea");
    }else {
        agregarTarea(tarea);
        guardarTarea(tarea);
        document.querySelector(".input-nueva-tarea").value = "";
    }
});

//funcion para agregar una tarea al DoM
function agregarTarea(tarea) {
    let nuevaTarea = document.createElement("li"); //creamos la etiqueta li
    nuevaTarea.classList.add("n-tarea");// le agregamos una clase
    nuevaTarea.innerHTML=`
        <input type="checkbox" class="checkbox">
        <p class="tarea"></p>
        <button class="boton-eliminar tarea">Eliminar</button>`;// agregamos lo que incluira la etiqueta li
    nuevaTarea.querySelector(".tarea").innerText= tarea;//agregamos la nueva tarea en la etiqueta p
    document.querySelector(".lista-tareas").appendChild(nuevaTarea);//agregamos todo esto dentro de la etiqueta ul

    //limpia el input despues de guardar el anterior
    document.querySelector(".input-nueva-tarea").value="";
    
    //MARCAR TAREA
    
    //agregamos diseño para que cuando le demos al checkbox 
    nuevaTarea.querySelector(".checkbox").addEventListener("click",
        function() {

            //obtenemos el valor de la lista creada
            let tex_tarea = nuevaTarea.querySelector(".tarea");
            
            //obtenemos el valor del checkbox marcado o no
            //let checked = nuevaTarea.querySelector(".checkbox").checked;
            let checked = this.checked;

            //verificamos si el checkbox esta marcado o no para aplicar el diseño
            if (checked) {
                tex_tarea.style.color = "red";
                tex_tarea.style.textDecoration = "line-through";   
            }else{
                tex_tarea.style.color = "black";
                tex_tarea.style.textDecoration = "none";
            }
        });
    
    //ELIMINAR TAREA
    //funcionalidad para eliminar la tarea
    nuevaTarea.querySelector(".boton-eliminar").addEventListener("click",
        function() {
            
            //seleccionamos al elemento padre y eliminamos a su hijo
            nuevaTarea.parentElement.removeChild(nuevaTarea);
            eliminarTarea(tarea);
        });
}

    //funcion para guardar nueva tarea al localStorage
    function guardarTarea(tarea) {
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas.push(tarea);
        localStorage.setItem("tareas",JSON.stringify(tareas));
    }

    //funcion para eliminar una tarea del localStorage
    function eliminarTarea(tarea) {
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas = tareas.filter(t => t !== tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }
*/
// Función para cargar tareas desde localStorage al iniciar la página
window.addEventListener("DOMContentLoaded", function () {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareasGuardadas.forEach(function (texto) {
        agregarTarea(texto);
    });
});

document.querySelector(".boton-nueva-tarea").addEventListener("click", function () {
    let tarea = document.querySelector(".input-nueva-tarea").value;

    if (tarea.trim() === "") {
        alert("Ingrese una tarea");
    } else {
        agregarTarea(tarea);
        guardarTarea(tarea);
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

    document.querySelector(".lista-tareas").appendChild(nuevaTarea);
}

// Función para guardar una nueva tarea en localStorage
function guardarTarea(tarea) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para eliminar una tarea del localStorage
function eliminarTarea(tarea) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(t => t !== tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}


