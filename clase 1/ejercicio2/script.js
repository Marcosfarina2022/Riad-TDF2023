
//utilizo el queryselector para apuntar al contenedor de clase 
let div1 = document.querySelector(".contenedor1");
// para elementos con id utilizo el getElementbyid
let div3 = document.getElementById("contenedor3");

//agrego estilo desde javascript, a los div.
div3.classList.add("fondoRojo");
div1.classList.add("fondoVioleta");

//apunto a varios contenedores con la misma clase
let multiples = document.getElementsByClassName("multiplescontenedores");
//agrego un estilo a un elemento del arreglo en este caso al de la posición 0
multiples[0].classList.add("fondoAzul");
//agrego un estilo a un elemento del arreglo en este caso a la de la posición 1
multiples[1].classList.add("fondoVerde");
//imprimo por pantalla para que me muestre todos los arreglos
console.log(multiples);
//Apunto a todos los divs del documento
let multiplesDivs = document.querySelectorAll("div");
//mostramos todo lo que tiene el arreglo en la posición 0
console.log(multiplesDivs[0]);
//Consulto los hijos que tiene el div3
let hijoDiv3 = div3.children;
//Muestro la cantidad de hijos que tiene el div3
console.log(hijoDiv3);
// apunto al elemento div4
let padre = document.querySelector(".div4")
// consulto el padre del elemento párrafo
let padrediv3 = padre.parentElement;
//Me muestra que el padre del elemento es un div
console.log(padrediv3);
let hermanoSiguiente = document.getElementById("parrafoDiv3");
//Busco el siguiente hermano del párrafo que contiene el div3
let hermanoP = hermanoSiguiente.nextElementSibling;
//Muestro el siguiente hermano del Párrafo del div3
console.log(hermanoP);
