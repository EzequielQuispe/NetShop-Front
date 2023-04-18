import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../asyncmock'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [idCategoria])


    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}