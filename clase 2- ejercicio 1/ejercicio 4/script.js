let persona1 = {
    nombre: "Lucas",
    apellido : "Martinez",
    edad : 47,
    sexo : "M",
    dni : 26623429,
    hijos : [ "Ana", "Marcos"]

}

let persona2 = persona1;

//creo una lista desde java script

let miLista = document.getElementById("miLista");

let elemento1 = document.createElement("li");
let elemento2 = document.createElement("li");
let elemento3 = document.createElement("li");

elemento1.innerHTML = `${persona1.nombre} ${persona1.apellido}`;
elemento2.innerHTML = "texto2";
elemento3.innerHTML = "texto3";

miLista.appendChild(elemento1);
miLista.appendChild(elemento2);
miLista.appendChild(elemento3);
