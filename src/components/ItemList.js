import './itemList.css';
import Item from './Item';

export default function ItemList({products}){
    return (
        <div>
            {
                products.map( function(producto){
                    return(
                        <div className='itemList-container'>
                            <Item key={producto.id} item={producto}/>
                        </div>
                    )
                })
            }
        </div>
    )

}