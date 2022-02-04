import React , {useState} from 'react';
import './../ItemCount.css';


export default function ItemCount(){
    const [itemCounter, setItemCounter] = useState(inicio);

    function suma(){
        if(itemCounter < stock){
            setItemCounter (itemCounter + 1);
        }
    }

    function resta(){
        if(itemCounter > 0){
            setItemCounter (itemCounter - 1);
        }
    }

    function agregarAlCarrito(){
        onAdd(itemCounter);
    }




    return(
        <div>
            <div className='contenedorItemCount'>
                <button onClick={resta}>-</button>
                <p>{itemCounter}</p>
                <button onClick={suma}>+</button>
            </div>
            <button className='agregaCarrito' onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
}