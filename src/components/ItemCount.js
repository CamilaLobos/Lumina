import React , { useState} from 'react';
import './ItemCount.css';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';


export default function ItemCount({inicio, stock, onAdd}){
    const [itemCounter, setItemCounter] = useState(inicio);

    function agregar(){
        if(itemCounter < stock){
            setItemCounter (itemCounter + 1);

        }
    }
    function quitar(){
        if(itemCounter > 0){
            setItemCounter (itemCounter - 1);
        }
    }

    function agregarAlCarrito(event){
        console.log(event.target.value);
        onAdd(event.target.value);
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