let persona1 = {
    nombre: "Lucas",
    apellido : "Martinez",
    edad : 47,
    sexo : "M",
    dni : 26623429,
    hijos : [ "Ana", "Marcos"]

}

let persona2 = persona1;

console.log("PERSONA1");
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
console.log(persona1.sexo);
console.log(persona1.dni);
console.log(persona1.hijos);

console.log("PERSONA2");
onsole.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.edad);


persona2.nombre ="Cecilia";
persona2.apellido = "Fleitas";
persona2.edad = 32;
persona2.sexo = "F";
persona2.dni = 23343231;
persona2.hijos= ["julian", "delfina"];

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
console.log(persona1.sexo);
console.log(persona1.dni);
console.log(persona1.hijos);

console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.edad)
console.log(persona2.sexo);
console.log(persona2.dni);
console.log(persona2.hijos);



