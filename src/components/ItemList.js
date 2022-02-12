import './itemList.css';
import Item from './Item';

export default function ItemList({items}){
    return (
        <div>
            {
                items.map((item) => {
                    return(
                        <div className='itemList-container'>
                            <Item key={item.id} item={item}/>
                        </div>
                    )
                })
            }
        </div>
    )

}