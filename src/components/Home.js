import React, { useEffect } from 'react';
import MetaData from './layout/MetaData';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, products, error, productsCount } = useSelector((state) => state.products);

    console.log(loading, products, error, productsCount);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <MetaData title={'Buy best products online'} />
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={product.id}>
                            <div className="card p-3 rounded">
                                <img className="card-img-top mx-auto" src={product.image} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        <a href="">{product.title}</a>
                                    </h5>
                                    <div className="ratings mt-auto">
                                        <div className="rating-outer">
                                            <div
                                                className="rating-inner"
                                                style={{ width: `${(product.rating.rate / 5) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span id="no_of_reviews">({product.rating.count} Reviews)</span>
                                    </div>
                                    <p className="card-text">${product.price}</p>
                                    <a href="#" id="view_btn" className="btn btn-block">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
