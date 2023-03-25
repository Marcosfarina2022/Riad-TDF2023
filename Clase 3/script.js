let btnConsulta = document.getElementById("consultarAPi");
btnConsulta.addEventListener("click", verInfo);

let titulo = document.getElementById("frase");

//Programamos la función asincrónica. De esta forma indico que la función será asincrónica
async function verInfo(){

    try {
//Esperamos la promesa
        let respuesta = await fetch("https://api.chucknorris.io/jokes/random"); //Dentro del fetch colocamos la dirección de la API
      if (respuesta.ok) {
        //mostramos la respuesta sin parsear
        console.log(respuesta);
        // parseamos la respuesta a Json
        let aux = await respuesta.json();
        //mostramos la respuesta parseada.
        console.log(aux);
        //En el elemento título del HTML escribo el texto que tiene value en la API.
        titulo.innerHTML = aux.value;
      }  
    } catch {
       console.log("error al obtener los datos"); 
    }
}