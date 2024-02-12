import React from 'react'
import  { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({saludo}) => {

        const [productos,setProductos]= useState([]);
        const {categoryId} = useParams()
    
        //Aca llamo  a los productos usando Hooks
        useEffect(()=>{
            const fetchData = async()=>{
                try{
                    const response = await   fetch(`/public/productos.json`);
                    const data = await response.json()

                    if(categoryId){
                        const filteredProducts = data.filter((p) => p.categoria == categoryId);
                        setProductos(filteredProducts)
                    }
                    else{
                    setProductos(data)
                    }
        
                }catch(error){
                    console.log("Error en el Fetch" + error)
                }
            }
            fetchData()
    
        },[categoryId])

    return (
    <>
    <h2 className='saludo'>{saludo}</h2>
    <section className='itemContainer'>   
    {productos.length == 0 ? 
    <h2>Cargando ....</h2>:
    <ItemList producto={productos} />}
    </section>
    </>
    )
}

export default ItemListContainer