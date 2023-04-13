import React from 'react';
import './Button.css';
function handleClick(event){// función que resive elementos sintéticos por argumento
    event.preventDefault();//Evita que la página se recargue cuando se hace un click sobre el boton
    alert('el boton fue precionado');
}
const Button = () =>{

return(
    <button onClick={handleClick} className="boton">Click me!</button>


)
}
export default Button;