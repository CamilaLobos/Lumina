
//1- Ir a buscar con el getItem la lista de productos.
//2- Filtrar un producto (cualquiera)
//3- Guardar en un estado propio ese prod.
//4- pasarle ese prod al componente ItemDetail.js


import { useEffect, useState } from "react";
import { getItems } from "../api/api";
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [item, setItem]= useState();

    useEffect(() => {
        getItems().then((items) => {
            const item = items.find((i) => i.id === 1);
            //ese item lo guardo en un estado
            setItem(item);
            console.log(item);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            {!item ? <p>Cargando producto...</p> : <ItemDetail item={item} />}
        </div>
    )


}