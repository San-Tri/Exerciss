
## 🎯 Reto 1: **Lista de tareas (To-Do List)**

### 🧠 ¿Qué aprenderás?

* Manipular el DOM.
* Capturar eventos (click, input).
* Crear elementos dinámicamente.
* Guardar datos en localStorage (opcional, pero recomendable).

---

### 📋 Requisitos del reto

1. Un campo de texto para escribir la tarea.
2. Un botón para agregar la tarea.
3. Una lista donde se mostrarán las tareas.
4. Cada tarea debe tener:

   * Un texto.
   * Un botón para marcar como completada (tachar o cambiar color).
   * Un botón para eliminarla.
5. \[Opcional] Guardar las tareas en el navegador (localStorage) para que no se pierdan al recargar.

---

### 🧭 Guía paso a paso

#### 1. 🧱 Estructura HTML básica

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>To-Do List</title>
</head>
<body>
  <h1>Lista de Tareas</h1>
  <input type="text" id="nuevaTarea" placeholder="Escribe una tarea">
  <button id="agregarBtn">Agregar</button>
  <ul id="listaTareas"></ul>

  <script src="script.js"></script>
</body>
</html>
```

---

#### 2. 🎨 Estilos CSS sugeridos

* Usa `ul` sin estilos por defecto.
* Añade colores y margen a las tareas.
* Cuando una tarea esté completada, agrégale una clase con `text-decoration: line-through`.

---

#### 3. ⚙️ Lógica en JavaScript (guía)

```js
// Paso 1: Captura los elementos del DOM
// Paso 2: Escucha el clic en el botón "Agregar"
// Paso 3: Cuando se haga clic:
//    - Toma el valor del input
//    - Crea un <li> con ese texto
//    - Añade botones: completar y eliminar
//    - Agrega el <li> a la lista
// Paso 4: Añade funcionalidad a los botones:
//    - Completar: cambia el estilo (tachado o color)
//    - Eliminar: quita el <li>
// Paso 5 (Opcional): Guarda las tareas en localStorage y recupéralas al cargar la página.
```

---

### 🛠 Tips útiles

* Usa `document.createElement()` para crear elementos dinámicos.
* Usa `element.classList.add()` y `classList.toggle()` para aplicar estilos.
* Usa `JSON.stringify()` y `JSON.parse()` para guardar y recuperar del localStorage.
* Puedes agregar un `keypress` para que al presionar Enter también se agregue la tarea.

---
