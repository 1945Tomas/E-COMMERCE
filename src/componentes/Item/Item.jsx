import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';



const Item = ({producto}) => {
    return (
        <Link to={`/detalle/${producto.id}`}>

        <div className='item' key={producto.id} >
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.descripcion}</p>
        <h2>$ {producto.precio}</h2>
        </div> 
        
        </Link>
    )
}

export default Item