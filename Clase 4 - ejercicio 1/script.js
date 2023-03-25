async function obtenerPersonajes(){
    let res = await fetch("htpps://rickandmortyapi.com/api/character")
    let data = await res.json();
    data.results.forEach(element => {
        console.log(element.name);
    });
}
obtenerPersonajes();