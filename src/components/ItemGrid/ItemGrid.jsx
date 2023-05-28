import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/firebase/config';
import { Item } from '../Item/Item';

export const ItemGrid = () => {

    const [products, setProducts] = useState([]);

    const { idCategory } = useParams();

    useEffect(() => {
        const dbProducts = idCategory ? query(collection(db, "products"), where("idCategory", "==", idCategory)) : collection(db, "products");

        getDocs(dbProducts)
            .then(res => {
                const newProducts = res.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts);
            })
            .catch(error => console.log(error))
    }, [idCategory])

    return (
        <div className="grid grid-cols-4 px-36 justify-items-center">
            {
                products.map(product => {
                    return <Item key={product.id}  {...product} />
                })
            }
        </div>
    )
}