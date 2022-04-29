import './ItemDetail.css';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//1- Recibir mediante props el item
//2- Mostrar el detalle del producto.
//3-Agregar un boton de compra o agrega al carrito


export default function ItemDetail({item}){
    const [ itemCount, setItemCount] = useState(1);

        {/*function onChangeItemCounter(event){
            console.log('Se muestra esto porque llama (o invoca) en el componente hijo');
            console.log(event);
        setItemCounter(event.target.value);*/}
        function onAddItem(newItemCount){
            console.log(newItemCount);
            setItemCount(newItemCount);
        }



    return(
        <div className='detalle-producto'>
            <img src={item.pictureUrl} alt="Imagen del producto" className='img-item-detail'/>
            <div className='columna-detalle'>
                <div className='details'>
                <h2>{item.title}</h2>
                <p className='price'>$ {item.price}</p>
                <p className='description'>{item.description}</p>
                </div>
                {
                    ! itemCount ? <ItemCount stock={20} inicio={1} onAdd={onAddItem} /> : <Link to="/cart"> Ir al carrito </Link>
                }
            </div>
        </div>
    )
};
