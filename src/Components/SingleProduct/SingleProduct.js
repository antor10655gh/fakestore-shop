import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({image, category, price}) => {
    return (
        <div className='col-md-4 gy-5'>
            <div className='box-shadow p-4'>
                <img src={image} alt="" />
                <div className='mt-3'>
                    <h3 className='text-uppercase'>{category}</h3>
                    <p><strong>Price:</strong> {price}Taka</p>
                    <button className='btn btn-success'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;