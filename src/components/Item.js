import './Item.css';

export default function Item ({item}){
    return(
        <div className='contenedorItem'>
            <img src={item.pictureUrl} alt="Imagen del producto"  className='img-item'/>
            <p className='price'>{item.price}</p>
            <p className='title'>{item.title}</p>
        </div>
    )
}