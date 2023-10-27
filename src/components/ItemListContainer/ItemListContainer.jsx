import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    console.log(categoryId)
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
    }, [categoryId])

    return (
        <div style={{ background: '#d6ccc2' }} onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{greeting + categoryId}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer