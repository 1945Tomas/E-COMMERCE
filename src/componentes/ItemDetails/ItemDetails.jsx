import React from 'react'
import Contador from '../Contador/Contador'
import Item from '../Item/Item';
import './ItemDetails.css'
import { Link } from 'react-router-dom';


const ItemDetails = ({producto}) => {
    if (!producto) {
        return <div>Loading...</div>;
    }
    
    return (
        
        <div className='itemDetalle'>
        <Item producto={producto}></Item>
        <Contador initial={1} stock={producto.stock}/>
        </div>
    )
}

export default ItemDetails