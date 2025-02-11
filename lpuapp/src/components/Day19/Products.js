import React, { useEffect, useState } from 'react';

function Products() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log("Error: ", err))
    }, []);

  return (
    <div>
        <h2>Products</h2>
        {
            product.length > 0 && (product.map(element => <p>{JSON.stringify(element)}</p>))
        }
    </div>
  )
}

export default Products;
