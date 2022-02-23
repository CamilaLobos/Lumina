import './Item.css';
import {Link} from 'react-router-dom';

export default function Item ({item}){
    return(
        <div className='contenedorItem'>
            <Link to={`/producto/${item.id}`}>
                <img src={item.pictureUrl} alt="Imagen del producto"  className='img-item'/>
                <p className='title'>{item.title}</p>
                <p className='price'>$ {item.price}</p>
            </Link>
        </div>
    )
}