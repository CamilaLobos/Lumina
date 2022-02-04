import React from "react";
import ItemCount from './ItemCount';



export default function ItemListContainer({greetings}) {
    return(
        <div>
            <h1>{greetings}</h1>

            <ItemCount />
        </div>
    )
}