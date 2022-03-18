import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({image, category, price, addToCart, removeCart}) => {
    return (
        <div className='col-md-4 gy-5'>
            <div className='box-shadow p-4'>
                <img src={image} alt="" />
                <div className='mt-3'>
                    <h3 className='text-uppercase'>{category}</h3>
                    <p><strong>Price:</strong> {price}Taka</p>
                </div>
                <div>
                    <button onClick={addToCart} className='btn btn-success ms-2'>Add Cart</button>
                    <button onClick={removeCart} className='btn btn-danger ms-2'>Remove</button>
                    <button className='btn btn-info ms-2'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;