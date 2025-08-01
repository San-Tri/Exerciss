//funcion para cargar tareas del localStorage al iniciar la pagina
window.addEventListener("DOMContentLoaded", function () {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareasGuardadas.forEach(function (texto) {
        agregarTarea(texto);        
    });
});


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

    };
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
            
            //obtenemos el valor del checkbox marcado o no
            let checked = nuevaTarea.querySelector(".checkbox").checked

            //otenemos el valor de la lista creada
            let tex_tarea = nuevaTarea.querySelector(".tarea")

            //verificamos si el checkbox esta marcado o no para aplicar el diseño
            if (checked) {
                tex_tarea.style.color = "red";
                tex_tarea.style.textDecoration = "line-through";   
            }else{
                tex_tarea.style.color = "black";
                tex_tarea.style.textDecoration = "none";
            }
        }
    );
    
    //ELIMINAR TAREA

    //funcionalidad para eliminar la tarea
    nuevaTarea.querySelector(".boton-eliminar").addEventListener("click",
        function() {

            //seleccionamos al elemento padre y eliminamos a su hijo
            nuevaTarea.parentElement.removeChild(nuevaTarea);
        }
    );

    //funcion para guardar nueva tarea al localStorage
    function guardarTarea()

}

