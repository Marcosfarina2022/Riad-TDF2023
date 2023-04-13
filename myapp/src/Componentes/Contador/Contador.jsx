import React, {useState}from 'react';

const Contador = () =>{

    const [count,setCount] = useState(100);
    function incrementar(){
        setCount(count+2);
    }
    function decrementar(){
        setCount(count -1);
    }
    return (

        <div>
            <h2>contador:{count}</h2>
            <button onClick={incrementar}> Incrementar</button>
            <button onClick={decrementar}> Decrementar</button>
        </div>
    )
}
export default Contador;