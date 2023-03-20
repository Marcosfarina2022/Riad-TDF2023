//Creamos un JSON

let data = `{
    "empleados": [
        {
            "nombre": "Marcos",
            "apellido": "Farina",
            "dni": "303303323"
        },
        {
            "nombre": "Marcela",
            "apellido": "Guillermo",
            "dni": "2397623"
        },
        {
            "nombre": "Martin",
            "apellido": "Rodriguez",
            "dni": "3067420"

        },
        {
            "nombre": "Maria Jose",
            "apellido": "Herrera",
            "dni": 29039267

        },
        { 
            "nombre": "Laura",
            "apellido": "alcaraz",
            "dni": "1275639"
        }
    ]
}`
//convertimos un json a un objeto de javascript
let personasEmpleadas = JSON.parse(data);
//De esta forma me muestra todo el arreglo
console.log(personasEmpleadas);
//De esta forma me muestra solo los nombres
console.log(personasEmpleadas.empleados);
//De esta forma me muestra el nombre del empleado 1
console.log(personasEmpleadas.empleados[0].nombre); 
//Muestra el Apellido del empleado numero 3 del arreglo
console.log(personasEmpleadas.empleados[3].apellido); 

