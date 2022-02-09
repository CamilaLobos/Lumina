import React from "react";

import ItemCount from './ItemCount';
import './ItemListContainer.css';



export default function ItemListContainer({greetings}) {

    function agregarAlCarrito(itemCount){
        console.log(itemCount);
    }
    return(
        <div className="container-general">
            <section>
                <h1 className="greeting">{greetings}</h1>
            </section>

            <div>
                <ItemCount
                inicio={1}
                onAdd={agregarAlCarrito} />
            </div>

        </div>
    )
}