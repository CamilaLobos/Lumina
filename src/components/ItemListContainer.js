import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItems} from './../api/api';
import ItemList from './ItemList';
import './ItemListContainer.css';


export default function ItemListContainer({greetings}) {

    const [itemList, setItemList] = useState([]);
    const {categoryName} = useParams();
    console.log(categoryName);

    useEffect(() => {
        getItems().then((items) => {
            if (!categoryName){
                    setItemList(items)
                }else{
                    const itemsPorCategoria = items.filter((producto) => {
                    return producto.category === categoryName
                });
                setItemList(itemsPorCategoria);
            }
        }).catch((error) => {
            console.log(error);
        });
    }, [categoryName]);

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


        </div>
    )
}