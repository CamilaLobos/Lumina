import React , {useEffect, useState} from 'react';
import './ItemCount.css';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';


export default function ItemCount({inicio, onAdd}){
    const [itemCounter, setItemCounter] = useState(inicio);
    const [stockCount, setStockCount] = useState(10)

    function agregar(){
        if(itemCounter < stockCount){
            setItemCounter (itemCounter + 1);

        }else{
            alert('La cantidad seleccionada de productos no esta disponible.')
            setItemCounter(itemCounter);
        }
    }
    function quitar(){
        if(itemCounter > 0){
            setItemCounter (itemCounter - 1);
        }else{
            setItemCounter(itemCounter);
        }
    }

    function agregarAlCarrito(){
        onAdd(itemCounter);
    };




    return(
        <div className='containerGeneral'>
            <div className='contenedorItemCount'>
            <AiOutlineMinus className='imagenMasMenos' onClick={() => setItemCounter(quitar)} />
            <p className='itemCounter'>{itemCounter}</p>
            <AiOutlinePlus className='imagenMasMenos' onClick={() => setItemCounter(agregar)}/>
            </div>

            <button className='agregaCarrito' onClick={agregarAlCarrito}>Agregar al carrito</button>

        </div>
    );
}