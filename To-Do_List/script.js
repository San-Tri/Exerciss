
document.querySelector(".boton-nueva-tarea").addEventListener("click", 
    function() {
    //Obtenemos el valor actual del input.
    let tarea = document.querySelector(".input-nueva-tarea").value;
    
    //verificamos si el campo esta vacio
    if (tarea.trim() === "") {//trim elimina los espacios vacios al inicio y final de la cadena
        console.log("el campo esta vacio");
        alert("ingrese una tarea");
    }else {
        //si el campo tiene contenido se guardara en lista de tareas
        console.log("el campo tiene contenido");

        //creamos listas para tarea sin quese sobre escriba
        let nuevaTarea = document.createElement("li") //creamos la etiqueta li
        nuevaTarea.classList.add("n-tarea");// le agregamos una clase
        nuevaTarea.innerHTML=`
        <input type="checkbox" class="checkbox">
        <p class="tarea"></p>
        <button class="boton-eliminar tarea">Eliminar</button>`;// agregamos lo que incluira la etiqueta li
        nuevaTarea.querySelector("p").innerText= tarea;//agregamos la nueva tarea en la etiqueta p
        document.querySelector(".lista-tareas").appendChild(nuevaTarea);//agregamos todo esto dentro de la etiqueta ul
        

        //limpia el input despues de guardar el anterior
        document.querySelector(".input-nueva-tarea").value="";
        
        //agregamos diseño para que cuando le demos al checkbox se ponga roja la letra y este tachada
        nuevaTarea.querySelector(".checkbox").addEventListener("click",
            function() {
                let tex_tarea = document.querySelector(".tarea")
                tex_tarea.style.color = "red";
                tex_tarea.style.textDecoration = "line-through";
            }
        );
    };
});

