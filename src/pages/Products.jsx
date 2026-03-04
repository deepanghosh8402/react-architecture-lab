import React, { useCallback, useState } from 'react'
import productsData from '../data/products.json'
import ProductList from '../components/ProductList'

export default function Products() {
    const [filterQuery, setFilterQuery] = useState("")
    const [count, setCount] = useState(0)
    // useCallback prevents new function creation on every render
    const handleInputChange = useCallback((e) => {
        setFilterQuery(e.target.value);
    }, []);

    return (

        <div style={{ padding: "20px" }}>
            <h2>Product Page useMemo & useCallback Demo</h2>
            <input
                type="text"
                placeholder="Search product..."
                value={filterQuery}
                onChange={handleInputChange}
            />
            <button onClick={() => setCount(count + 1)}>
                Re-render Count: {count}
            </button>
            <ProductList products={productsData} filterQuery={filterQuery} />
        </div>
    )
}
