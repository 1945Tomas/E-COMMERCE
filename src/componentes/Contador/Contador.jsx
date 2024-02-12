import React, { useState } from 'react';
import './Contador.css';


const Contador = ({initial , stock}) => {

    const [contador , setContador] = useState(1);

    const sumar = ()=>{
        if(contador < stock){
        setContador(contador+1)
    }
    }
    const restar = ()=>{
        
        if(contador > initial){
            setContador(contador - 1)
        }
    }
    const agregarCarrito = ()=>{
        alert("Añadido al carrito")
    }

return (
    <div className='contador'>
        <h2 className='cantidad'>{contador}</h2>
        <button onClick={restar} className='boton-restar'>-</button>
        <button onClick={agregarCarrito}>Agregar</button>
        <button onClick={sumar} className='boton-sumar'>+</button>
    </div>
)
}

export default Contador