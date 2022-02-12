import React from "react";
import { useEffect, useState } from "react";

import { getItems} from './../api/api';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import './ItemListContainer.css';


export default function ItemListContainer({greetings}) {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItems().then((items) => {
            setItemList(items);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function agregarAlCarrito(itemCount){
        console.log(itemCount);
    }
    return(
        <div className="container-general">
            <section>
                <h1 className="greeting">{greetings}</h1>
            </section>
            {
                itemList === 0 ?
                <p>Cargando...</p> :
                <ItemList items={itemList} />
            }

            <div>
                <ItemCount
                inicio={1}
                onAdd={agregarAlCarrito} />
            </div>

        </div>
    )
}