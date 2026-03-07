import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../reduxToolkit/productSlice'

export default function ReduxThunk() {
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector(
        (state) => state.products
    )
    useEffect(() => {
        dispatch(fetchProducts())       
    }, [dispatch])

    if (loading) return <p>Loading......</p>
    if (error) return <p>Error:  {error}</p>
    return (
        <div>           
            <h2>Products</h2>
            {items.map(product => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))}
        </div>
    )
}
