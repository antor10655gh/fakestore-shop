import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({addToCart,removeCart}) => {
    const [allProducts, setAllproducts] = useState([]);
    console.log(allProducts);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setAllproducts(json))
    },[]);
    return (
        <div className='my-5'>
            <h1>Welcome To Fakestore <span style={{color: 'orange'}}>Shop</span></h1>
            <div class="input-group my-4 container">
                <input type="text" class="form-control" placeholder="Search your choice" aria-label="Search your choice" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            <div className="container mx-auto mt-5 row">
            {
                allProducts.map(product => <SingleProduct image={product.image} category={product.category} price={product.price} description={product.description} addToCart={addToCart} removeCart={removeCart}></SingleProduct>)
            }
            </div>
        </div>
    );
};

export default AllProducts;