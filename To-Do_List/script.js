
document.querySelector(".boton-nueva-tarea").addEventListener("click", 
    function() {
    //Obtenemos el valor actual del input.
    let tarea = document.querySelector(".input-nueva-tarea").value;
    
    //verificamos si el campo esta vacio
    if (tarea.trim() === "") {
        console.log("el campo esta vacio")
        alert("ingrese una tarea")
    }else {
        //si el campo tiene contenido se guardara en lista de tareas
        console.log("el campo tiene contenido")

        while (condition) {
            
        }
        document.querySelector(".tarea").innerText= tarea;
        alert("¡Nueva tarea creada!");

        document.querySelector(".input-nueva-tarea").value="";                
    };
});