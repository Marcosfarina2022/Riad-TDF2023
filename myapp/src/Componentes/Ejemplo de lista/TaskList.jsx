import React from 'react';
import ItemList from './ItemList';
const TaskList = () => {
    return(
<div>
        <h2>Lista de Tareas</h2>
        <ul>
            <ItemList title = "Tarea 1" description= "Descripción de tarea 1"></ItemList>
            <ItemList title = "Tarea 2" description= "Descripción de tarea 2"></ItemList>
            <ItemList title = "Tarea 3" description= "Descripción de tarea 3"></ItemList>
        </ul>
</div>
    )
}
export default TaskList;