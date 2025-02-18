// Definición del array de tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea(id, descripcion) {
    tareas.push({ id: id, descripcion: descripcion, completado: false });
}

// Función para eliminar una tarea por id
function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
}

// Función para marcar una tarea como completada
function completarTarea(id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completado = true;
    }
}

// Ejemplo de uso
agregarTarea(1, 'Aprender JavaScript');
agregarTarea(2, 'Practicar algoritmos');
console.log(tareas);

eliminarTarea(1);
console.log(tareas);

completarTarea(2);
console.log(tareas);
