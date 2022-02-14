
//1- Ir a buscar con el getItem la lista de productos.
//2- Filtrar un producto (cualquiera)
//3- Guardar en un estado propio ese prod.
//4- pasarle ese prod al componente ItemDetail.js


import { useEffect, useState } from "react";
import { getItems } from "../api/api";


export default function ItemDetailContainer() {
    const [prodEncontrado, setProdEncontrado]= useState(producto);

    useEffect(() => {
        getItems().then((item) => {
            const producto = item.find((i) => i.id === 1);
            //ese item lo guardo en un estado
            setProdEncontrado(item);
            console.log(producto);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            
        </div>
    )


}