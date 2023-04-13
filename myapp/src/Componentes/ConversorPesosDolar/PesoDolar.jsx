import React,{useState} from 'react';
function PesoDolar(){
    const [peso,setPeso] = useState('');
    const convertirADolares =(pesos)=>{
    const dolares = pesos/390;
    return dolares.toFixed(2)
    }
    return(

        <div>
            <h2>Conversos de pesos a dólares</h2>
            <input
            tipe ='number'
            value ={peso}
            onChange = {(e)=>setPeso(e.target.value)}
            style ={{width:'12rem'}}
            />
            <h4>{peso?` ${peso} pesos equivalen a ${convertirADolares(peso)} dolares`:'Ingrese los pesos a convertir'}</h4>
        </div>

    )
}
export default PesoDolar;