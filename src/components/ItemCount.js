import React from 'react';
import './../ItemCount.css';

export default function ItemCount(){
    return(
        <div>
            <div className='contenedorItemCount'>
                <p className='articulo'>Artículo #23</p>
                <input type="number" name="number" value="0" />
            </div>
        </div>
    );
}