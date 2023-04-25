import { useState } from "react"
import Card from "./Card";
import "./formulario.css";

 const MyForm = () =>{

const [nombre,setNombre] = useState("");
const [apellido,setApellido] = useState("");
const [dni,setDni] = useState("");
const [edad,setEdad] = useState("");
const [nacionalidad,setNacionalidad] = useState("");
const [descripcion,setDescripcion] = useState("");
const [personas,setPersonas] = useState([]);//variable y arreglo donde se guardaran los datos de cada persona//

const handleSubmit = (e) => {
e.preventDefault();
console.log(nombre);
console.log(apellido);
console.log(dni);
console.log(edad);
console.log(nacionalidad);
console.log(descripcion);

setPersonas([...personas,{nombre,apellido,dni,edad,nacionalidad,descripcion}]);
setNombre("");
setApellido("");
setDni("");
setEdad("");
setNacionalidad("");
setDescripcion("");

}

return (


<div className="formularioPersonas listaPersonas">
    <h2>Formulario de datos de Personas</h2>
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:

                <input type="text" value = {nombre} onChange= {(e)=>setNombre(e.target.value)}></input>

            </label>
        </div>
        <div>
            <label>Apellido:

                <input type="text" value = {apellido} onChange= {(e)=>setApellido(e.target.value)}></input>

            </label>
        </div>
        <div>
            <label>Dni:

                <input type="number" value = {dni} onChange= {(e)=>setDni(e.target.value)}></input>

            </label>
        </div>
        <div>
            <label>Edad:

                <input type="number" value = {edad} onChange= {(e)=>setEdad(e.target.value)}></input>

            </label>
        </div>
        <div>
            <label>Nacionalidad:

            <input type="text" value = {nacionalidad} onChange= {(e)=>setNacionalidad(e.target.value)}></input>

        </label>
        </div>
        <div>
            <label>Descripción:

                 <input type="text" value = {descripcion} onChange= {(e)=>setDescripcion(e.target.value)}></input>

            </label>
        </div>
        <button className="boton" type="submit">Enviar</button>
    </form>
    </div>
        <div> 
            {personas.map((persona) => <Card key= {persona.nombre} nombre={persona.nombre} apellido={persona.apellido}/>)}
        </div>
                
</div>

)

}
export default MyForm;