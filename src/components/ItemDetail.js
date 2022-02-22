import './ItemDetail.css';

//1- Recibir mediante props el item
//2- Mostrar el detalle del producto.
//3-Agregar un boton de compra o agrega al carrito


export default function ItemDetail({item}){
    return(
        <div className='detalle-producto'>
            <img src={item.pictureUrl} alt="Imagen del producto" className='img-item-detail'/>
            <div className='columna-detalle'>
                <div className='details'>
                <h2>{item.title}</h2>
                <p className='price'>$ {item.price}</p>
                <p className='description'>{item.description}</p>
                </div>
                <button>Comprar</button>
            </div>
        </div>
    )
};
