import React from 'react'
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';

const ItemDetailContainer =() => {

        const [producto,setProductos]= useState([]);
        const {id} = useParams()
    
        //Aca llamo  a los productos usando Hooks
        useEffect(()=>{
            const fetchData = async()=>{
                try{
                    const response = await fetch('/productos.json');
                    const data = await response.json();
                    const product = data.find((p)=>p.id == id);
                    setProductos(product)
                }catch(error){
                    console.log("Error en el Fetch" + error)
                }
            }
            fetchData()
    
        },[])
    
        return (
        
        <>
        <ItemDetails producto={producto} />
        </>
        )
    }

export default ItemDetailContainer