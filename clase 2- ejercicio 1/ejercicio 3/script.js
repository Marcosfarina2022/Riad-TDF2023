//Convertir un JS a JSON 

let data = {
    empleados:[
        {nombre:"Juan",apellido:"Perez"},
        {nombre: "Karina",apellido:"Gonzalez"},
        {nombre:"Marcos",apellido:"Farina"},
        {nombre: "Marcela",apellido:"Guillermo"}

    ]
   
}
//convertimos un JS a JSON
let dataJson = JSON.stringify(data);
//Mostramos como queda por consola
console.log ("data",data);
console.log(dataJson);



