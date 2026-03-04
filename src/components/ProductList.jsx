import React, { useMemo, } from 'react'

export default function ProductList(props) {
    const { products, filterQuery } = props;
    const GetProductList = React.memo(({ pro=[], filterQuery="" }) => {

        const visibleProducts = useMemo(() => {
            return pro.filter(product =>
                product.name.toLowerCase().includes(filterQuery.toLowerCase())
            );
        }, [pro, filterQuery]);

        return (
            <div>
                {visibleProducts.map(product => (
                    <div key={product.id}>{product.name}</div>
                ))}
            </div>
        );
    });
    return (
        <GetProductList pro={products} filterQuery={filterQuery}/>
    )
}
