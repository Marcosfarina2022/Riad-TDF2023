import React, {useState,useEffect} from 'react';

export const UserList = () => {

const [users,setUsers] = useState([]);//user es la variable de estado donde se van a guardar los usuarios que se traigan de la API
//Entre paréntesis va como se quiere inicializar el estado, en este caso es como un arreglo Vacío.
const fetchUsers = async () =>{//función asíncrona, donde se va a guardar una constante. 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();// hacemos el json para que la transforme en formato json.
    setUsers(data)//la data que trajimos de la API la guardamos en la variable estado.
}
useEffect(()=>{ // el useEffect es para hacer efectos secundarios, en este caso recibe dos parámetros
    fetchUsers()// se ejectua la función FetchUsers. se va a ejecutar una sola vez que es cuando el componente se renderiza.
},[])// Como hay un corchete vacío se ejecuta una sola vez
return (
<div>
    <h1>Lista de usuarios</h1>
    <ul>
        {users.map(user =>(//con el map recorremos el arreglo
            <li key={user.id}> {user.name}</li>//utilizamos el user.id para que cada ítem de la lista tenga un id único. 
        ))}   
    </ul>
</div>
)

}
