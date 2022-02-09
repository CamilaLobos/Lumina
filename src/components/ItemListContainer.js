import React from "react";
import { useEffect, useState } from "react";

import { getProducts } from './../api/api';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import './ItemListContainer.css';


export default function ItemListContainer({greetings}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(function(products){
            console.log(products);
            setProducts(products);
        })
    })

    function agregarAlCarrito(itemCount){
        console.log(itemCount);
    }
    return(
        <div className="container-general">
            <section>
                <h1 className="greeting">{greetings}</h1>
            </section>
            {products.length > 0 ? <ItemList products={products}/> : <p>Cargando...</p>}

            <div>
                <ItemCount
                inicio={1}
                onAdd={agregarAlCarrito} />
            </div>

        </div>
    )
}