
//1- Ir a buscar con el getItem la lista de productos.
//2- Filtrar un producto (cualquiera)
//3- Guardar en un estado propio ese prod.
//4- pasarle ese prod al componente ItemDetail.js


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/api";
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [item, setItem]= useState();
    const { productoId } = useParams();

    useEffect(() => {
        getItems().then((items) => {
            const item = items.find((i) => i.id === Number(productoId));
            //ese item lo guardo en un estado
            setItem(item);
            console.log(item);
        }).catch((error) => {
            console.log(error);
        });
    }, [productoId]);

    return (
        <div>
            {!item ? <p>Cargando producto...</p> : <ItemDetail item={item} />}
        </div>
    )


}