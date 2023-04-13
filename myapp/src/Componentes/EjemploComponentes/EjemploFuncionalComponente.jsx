import React from 'react';

// Los componentes funcionales, son funciones de java script que devuelven elementos de react
//Estos elementos se renderizan en la pantalla 
// Estos componentes no tienen estado y no tiene ciclo d vida propia.
//La diferencia con los componentes de clases es que los de clases tienen un ciclo de vida y un estado propio
//Se recomiendan los componentes funcionales, son mucho mas sencillos y menos propenso a los errores.
function EjemploFuncionalComponente(){
    return (

<div>
    <h1> soy un componente funcional</h1>
</div>
    
    )
}

export default EjemploFuncionalComponente;